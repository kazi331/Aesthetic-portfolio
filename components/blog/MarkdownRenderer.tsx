'use client';

import React from 'react';
import CodeBlock from './CodeBlock';
import { Sparkles, Info, AlertTriangle, Lightbulb } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
}

// Convert heading string to valid element id (e.g. "The Problem: Redundant Client Polls" -> "the-problem-redundant-client-polls")
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  let insideCodeBlock = false;
  let codeBlockLanguage = '';
  let codeBlockLines: string[] = [];

  let insideList = false;
  let listItems: React.ReactNode[] = [];

  const flushList = (keyPrefix: number) => {
    if (insideList && listItems.length > 0) {
      elements.push(
        <ul key={`list-${keyPrefix}`} className="my-5 space-y-2.5 pl-2 list-none">
          {listItems}
        </ul>
      );
      listItems = [];
      insideList = false;
    }
  };

  // Helper to parse inline styles: **bold**, `code`, and links
  const renderInline = (text: string): React.ReactNode => {
    // Regex for bold, inline code, and links
    const parts = text.split(/(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g);

    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-[#F5F5F5]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={i}
            className="px-1.5 py-0.5 mx-0.5 rounded-md bg-white/[0.08] text-[#89AACC] font-mono text-[12px] border border-white/10"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
        const title = part.slice(1, part.indexOf(']('));
        const url = part.slice(part.indexOf('](') + 2, -1);
        return (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline decoration-accent/50 underline-offset-4"
          >
            {title}
          </a>
        );
      }
      return part;
    });
  };

  lines.forEach((line, index) => {
    // 1. Code Blocks
    if (line.trim().startsWith('```')) {
      flushList(index);
      if (insideCodeBlock) {
        // Closing code block
        insideCodeBlock = false;
        const rawCode = codeBlockLines.join('\n');
        elements.push(
          <CodeBlock
            key={`code-block-${index}`}
            code={rawCode}
            language={codeBlockLanguage || 'typescript'}
          />
        );
        codeBlockLines = [];
        codeBlockLanguage = '';
      } else {
        // Opening code block
        insideCodeBlock = true;
        codeBlockLanguage = line.trim().replace('```', '').trim();
      }
      return;
    }

    if (insideCodeBlock) {
      codeBlockLines.push(line);
      return;
    }

    // 2. Horizontal Rules
    if (line.trim() === '---' || line.trim() === '***') {
      flushList(index);
      elements.push(
        <hr
          key={`hr-${index}`}
          className="my-10 border-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      );
      return;
    }

    // 3. Headings
    if (line.startsWith('### ')) {
      flushList(index);
      const text = line.replace('### ', '').trim();
      const id = slugifyHeading(text);
      elements.push(
        <h3
          key={`h3-${index}`}
          id={id}
          className="group relative text-xl sm:text-2xl font-bold font-display text-[#F5F5F5] mt-10 mb-4 tracking-tight scroll-mt-24 flex items-center gap-2"
        >
          <span>{renderInline(text)}</span>
          <a
            href={`#${id}`}
            className="opacity-0 group-hover:opacity-60 hover:!opacity-100 text-accent font-mono text-sm transition-opacity"
            aria-label={`Link to ${text}`}
          >
            #
          </a>
        </h3>
      );
      return;
    }

    if (line.startsWith('## ')) {
      flushList(index);
      const text = line.replace('## ', '').trim();
      const id = slugifyHeading(text);
      elements.push(
        <h2
          key={`h2-${index}`}
          id={id}
          className="group relative text-2xl sm:text-3xl font-bold font-display text-[#F5F5F5] mt-12 mb-5 pb-3 border-b border-white/5 tracking-tight scroll-mt-24 flex items-center justify-between"
        >
          <span>{renderInline(text)}</span>
          <a
            href={`#${id}`}
            className="opacity-0 group-hover:opacity-60 hover:!opacity-100 text-accent font-mono text-base transition-opacity"
            aria-label={`Link to ${text}`}
          >
            #
          </a>
        </h2>
      );
      return;
    }

    if (line.startsWith('# ')) {
      flushList(index);
      const text = line.replace('# ', '').trim();
      const id = slugifyHeading(text);
      elements.push(
        <h1
          key={`h1-${index}`}
          id={id}
          className="text-3xl sm:text-4xl font-bold font-display text-[#F5F5F5] mt-12 mb-6 tracking-tight scroll-mt-24"
        >
          {renderInline(text)}
        </h1>
      );
      return;
    }

    // 4. Callout blockquote (e.g. > [!NOTE] or > **Key Takeaway**)
    if (line.startsWith('> ')) {
      flushList(index);
      const calloutText = line.replace('> ', '').trim();
      let icon = <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />;
      let badge = 'NOTE';
      let borderCol = 'border-accent/40 bg-accent/[0.04]';

      if (calloutText.toLowerCase().includes('tip') || calloutText.toLowerCase().includes('takeaway')) {
        icon = <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />;
        badge = 'KEY TAKEAWAY';
        borderCol = 'border-emerald-500/30 bg-emerald-500/[0.04]';
      } else if (calloutText.toLowerCase().includes('warn') || calloutText.toLowerCase().includes('problem')) {
        icon = <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />;
        badge = 'WARNING';
        borderCol = 'border-amber-500/30 bg-amber-500/[0.04]';
      }

      elements.push(
        <div
          key={`callout-${index}`}
          className={`my-6 p-4 sm:p-5 rounded-2xl border ${borderCol} relative overflow-hidden backdrop-blur-sm`}
        >
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-muted-text">
              {badge}
            </span>
          </div>
          <div className="text-sm text-[#D1D5DB] leading-relaxed pl-6">
            {renderInline(calloutText)}
          </div>
        </div>
      );
      return;
    }

    // 5. Bullet Lists
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      insideList = true;
      const itemText = line.trim().replace(/^[-*]\s+/, '');
      listItems.push(
        <li key={`li-${index}`} className="text-sm sm:text-base text-muted-text flex items-start gap-3 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
          <span>{renderInline(itemText)}</span>
        </li>
      );
      return;
    }

    // 6. Numbered Lists
    const numMatch = line.trim().match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      insideList = true;
      const num = numMatch[1];
      const itemText = numMatch[2];
      listItems.push(
        <li key={`num-li-${index}`} className="text-sm sm:text-base text-muted-text flex items-start gap-3 leading-relaxed">
          <span className="font-mono text-xs font-bold text-accent px-1.5 py-0.5 rounded bg-white/5 border border-white/5 shrink-0 mt-0.5">
            {num}
          </span>
          <span>{renderInline(itemText)}</span>
        </li>
      );
      return;
    }

    // Non-list line encountered
    flushList(index);

    // 7. Regular Paragraph
    if (line.trim() !== '') {
      elements.push(
        <p
          key={`p-${index}`}
          className="my-4 text-sm sm:text-[15px] leading-relaxed text-[#D1D5DB] font-sans"
        >
          {renderInline(line)}
        </p>
      );
    }
  });

  // Flush any lingering list
  flushList(lines.length);

  return <div className="article-prose space-y-2">{elements}</div>;
}
