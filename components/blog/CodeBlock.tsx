'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal, WrapText } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

// Minimal, reliable token highlighting for developer code
function highlightCode(code: string, language: string = ''): React.ReactNode[] {
  const lines = code.split('\n');

  return lines.map((line, lineIdx) => {
    // Check for comment
    if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
      return (
        <span key={lineIdx} className="text-[#6A9955] italic">
          {line}
          {'\n'}
        </span>
      );
    }

    // Tokenize strings, keywords, types, and numbers
    const tokens: React.ReactNode[] = [];
    const regex = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b(?:import|export|from|const|let|var|function|return|async|await|if|else|try|catch|default|interface|type|extends|implements|new|class|this|typeof|keyof|true|false|null|undefined|while|for|switch|case|break)\b)|(\b(?:string|number|boolean|any|void|Promise|NextRequest|NextResponse|React|FC|Record|Array|FunctionRunResult|RunInput|BlogPost|Project)\b)|(\b\d+\b)|([{}()[\],;.:=+\-*/<>!&|?]+)|([a-zA-Z_$][a-zA-Z0-9_$]*)/g;

    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        tokens.push(line.slice(lastIndex, match.index));
      }

      const [full, str, keyword, typeName, num, punct, ident] = match;

      if (str) {
        tokens.push(
          <span key={`${lineIdx}-${match.index}`} className="text-[#CE9178]">
            {str}
          </span>
        );
      } else if (keyword) {
        tokens.push(
          <span key={`${lineIdx}-${match.index}`} className="text-[#569CD6] font-semibold">
            {keyword}
          </span>
        );
      } else if (typeName) {
        tokens.push(
          <span key={`${lineIdx}-${match.index}`} className="text-[#4EC9B0]">
            {typeName}
          </span>
        );
      } else if (num) {
        tokens.push(
          <span key={`${lineIdx}-${match.index}`} className="text-[#B5CEA8]">
            {num}
          </span>
        );
      } else if (punct) {
        tokens.push(
          <span key={`${lineIdx}-${match.index}`} className="text-[#D4D4D4]/70">
            {punct}
          </span>
        );
      } else if (ident) {
        // Highlight potential function calls
        const nextChar = line[regex.lastIndex];
        if (nextChar === '(') {
          tokens.push(
            <span key={`${lineIdx}-${match.index}`} className="text-[#DCDCAA]">
              {ident}
            </span>
          );
        } else {
          tokens.push(
            <span key={`${lineIdx}-${match.index}`} className="text-[#9CDCFE]">
              {ident}
            </span>
          );
        }
      } else {
        tokens.push(full);
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < line.length) {
      tokens.push(line.slice(lastIndex));
    }

    return (
      <span key={lineIdx}>
        {tokens.length > 0 ? tokens : ' '}
        {'\n'}
      </span>
    );
  });
}

export default function CodeBlock({ code, language = 'typescript', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [wrapLines, setWrapLines] = useState(false);

  const cleanCode = code.trim();
  const lineCount = cleanCode.split('\n').length;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = cleanCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const getLanguageLabel = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'ts':
      case 'typescript':
        return 'TypeScript';
      case 'js':
      case 'javascript':
        return 'JavaScript';
      case 'json':
        return 'JSON';
      case 'bash':
      case 'sh':
        return 'Bash';
      case 'rust':
      case 'rs':
        return 'Rust';
      case 'html':
        return 'HTML';
      case 'css':
        return 'CSS';
      default:
        return lang || 'Code';
    }
  };

  return (
    <div className="my-7 rounded-2xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl transition-all duration-300 hover:border-white/20 group">
      {/* Top Header Chrome */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22]/90 border-b border-white/5 select-none">
        {/* Left: macOS dots & file/language badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
          </div>

          <div className="h-3.5 w-[1px] bg-white/10 ml-1 hidden sm:block" />

          <div className="flex items-center gap-2 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span className="text-[#C9D1D9] font-medium">
              {filename || getLanguageLabel(language)}
            </span>
            <span className="text-[10px] text-muted-text font-normal px-2 py-0.5 rounded-full bg-white/5">
              {lineCount} {lineCount === 1 ? 'line' : 'lines'}
            </span>
          </div>
        </div>

        {/* Right: Controls (Wrap toggle, Line numbers toggle, Copy button) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Wrap toggle */}
          <button
            onClick={() => setWrapLines(!wrapLines)}
            className={`p-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              wrapLines ? 'bg-white/10 text-accent' : 'text-muted-text hover:text-white hover:bg-white/5'
            }`}
            title="Toggle line wrapping"
            aria-label="Toggle line wrapping"
          >
            <WrapText className="w-3.5 h-3.5" />
          </button>

          {/* Line Numbers Toggle */}
          <button
            onClick={() => setShowLineNumbers(!showLineNumbers)}
            className={`px-2 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
              showLineNumbers ? 'bg-white/10 text-accent font-bold' : 'text-muted-text hover:text-white hover:bg-white/5'
            }`}
            title="Toggle line numbers"
          >
            #
          </button>

          {/* Easy Copy Button with state feedback */}
          <button
            onClick={handleCopy}
            id="copy-code-btn"
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono font-medium transition-all duration-200 cursor-pointer ${
              copied
                ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/5'
            }`}
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Area with Line Numbers */}
      <div className="relative flex overflow-x-auto text-[13px] font-mono leading-relaxed bg-[#0b0e14] py-4">
        {/* Line Numbers column */}
        {showLineNumbers && (
          <div
            className="select-none text-right pr-4 pl-4 text-white/25 border-r border-white/5 font-mono text-[12px] shrink-0"
            aria-hidden="true"
          >
            {Array.from({ length: lineCount }).map((_, i) => (
              <div key={i} className="leading-relaxed">
                {i + 1}
              </div>
            ))}
          </div>
        )}

        {/* Code Content */}
        <pre
          className={`flex-1 pl-4 pr-6 ${
            wrapLines ? 'whitespace-pre-wrap break-words' : 'whitespace-pre'
          }`}
        >
          <code>{highlightCode(cleanCode, language)}</code>
        </pre>
      </div>
    </div>
  );
}
