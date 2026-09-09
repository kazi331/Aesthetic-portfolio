'use client';

import {
  CheckCircle2,
  RotateCcw,
} from 'lucide-react';
import { motion } from 'motion/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface MobileTechItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tooling';
  type: 'core' | 'data' | 'learning';
  experience: string;
  level: number;
  description: string;
  relatedProject?: {
    name: string;
    slug?: string;
  };
  color: string;
  accentHex: string;
}

export const mobileTechList: MobileTechItem[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    type: 'core',
    experience: '4 yrs exp',
    level: 95,
    description: 'Modern ES6+ syntax, async patterns, event-loop mechanics, closures, and high-performance DOM orchestration.',
    relatedProject: { name: 'EdTech Platform' },
    color: 'rgba(78, 196, 191, 0.9)',
    accentHex: '#4EC4BF',
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    type: 'core',
    experience: '4 yrs exp',
    level: 94,
    description: 'Component architecture, custom hooks, context management, concurrent rendering, and UI performance profiling.',
    relatedProject: { name: 'Hotelson Flight Booking' },
    color: 'rgba(78, 133, 191, 0.9)',
    accentHex: '#4E85BF',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    type: 'core',
    experience: '4 yrs exp',
    level: 92,
    description: 'Compile-time strict type systems, generics, automated schema mapping, and end-to-end full-stack safety.',
    relatedProject: { name: 'EdTech Platform' },
    color: 'rgba(78, 133, 191, 0.9)',
    accentHex: '#4E85BF',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    type: 'core',
    experience: '4 yrs exp',
    level: 94,
    description: 'App Router architecture, React Server Components (RSC), dynamic ISR caching, and edge routing.',
    relatedProject: { name: 'Mixory Bundles' },
    color: 'rgba(245, 245, 245, 0.9)',
    accentHex: '#F5F5F5',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    type: 'core',
    experience: '3 yrs exp',
    level: 93,
    description: 'Event-driven asynchronous services, streaming data pipelines, cluster multi-threading, and REST gateways.',
    relatedProject: { name: 'Mixory Bundles' },
    color: 'rgba(78, 196, 191, 0.9)',
    accentHex: '#4EC4BF',
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'backend',
    type: 'core',
    experience: '2 yrs exp',
    level: 88,
    description: 'Modular enterprise architecture, dependency injection, execution interceptors, guards, and domain isolation.',
    relatedProject: { name: 'EdTech Platform' },
    color: 'rgba(234, 88, 12, 0.9)',
    accentHex: '#EA580C',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    type: 'data',
    experience: '3 yrs exp',
    level: 90,
    description: 'Relational schema normalization, complex joins, indexing optimization, CTE queries, and ACID transactions.',
    relatedProject: { name: 'Mixory Bundles' },
    color: 'rgba(16, 185, 129, 0.9)',
    accentHex: '#10B981',
  },
  {
    id: 'prisma',
    name: 'Prisma ORM',
    category: 'database',
    type: 'data',
    experience: '2 yrs exp',
    level: 91,
    description: 'Declarative schema modeling, automated migrations, type-safe queries, and database connection pooling.',
    relatedProject: { name: 'Mixory Bundles' },
    color: 'rgba(16, 185, 129, 0.9)',
    accentHex: '#10B981',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    type: 'data',
    experience: '2 yrs exp',
    level: 89,
    description: 'NoSQL document schema design, aggregation pipelines, document indexing, and cloud Atlas scaling.',
    relatedProject: { name: 'EdTech Platform' },
    color: 'rgba(16, 185, 129, 0.9)',
    accentHex: '#10B981',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'tooling',
    type: 'core',
    experience: '2 yrs exp',
    level: 90,
    description: 'Schema-first GraphQL APIs, DataLoader N+1 prevention, custom resolvers, and Shopify Storefront APIs.',
    relatedProject: { name: 'Mixory Bundles' },
    color: 'rgba(139, 92, 246, 0.9)',
    accentHex: '#8B5CF6',
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'frontend',
    type: 'core',
    experience: '2 yrs exp',
    level: 86,
    description: 'Cross-platform mobile applications, native modules bridge, push notification flows, and offline sync.',
    relatedProject: { name: 'Maison: The Property App' },
    color: 'rgba(78, 133, 191, 0.9)',
    accentHex: '#4E85BF',
  },
  {
    id: 'shopify',
    name: 'Shopify Functions',
    category: 'tooling',
    type: 'learning',
    experience: '1 yr exp',
    level: 85,
    description: 'WebAssembly-based cart transformations, custom discount logic, and high-conversion embedded merchant apps.',
    relatedProject: { name: 'Mixory Bundles' },
    color: 'rgba(234, 179, 8, 0.9)',
    accentHex: '#EAB308',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    type: 'learning',
    experience: '1 yr exp',
    level: 80,
    description: 'Backend automation, data processing pipelines, async workflows, and scripting utility modules.',
    relatedProject: { name: 'Full Stack Web' },
    color: 'rgba(234, 179, 8, 0.9)',
    accentHex: '#EAB308',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    type: 'learning',
    experience: '1 yr exp',
    level: 82,
    description: 'Async REST endpoints with Pydantic validation, automatic OpenAPI documentation, and dependency injection.',
    relatedProject: { name: 'Full Stack Web' },
    color: 'rgba(234, 179, 8, 0.9)',
    accentHex: '#EAB308',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    type: 'core',
    experience: '4 yrs exp',
    level: 95,
    description: 'Utility-first responsive layouts, editorial aesthetics, custom design tokens, and fluid animations.',
    relatedProject: { name: 'EdTech Platform' },
    color: 'rgba(56, 189, 248, 0.9)',
    accentHex: '#38BDF8',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'database',
    type: 'data',
    experience: '2 yrs exp',
    level: 88,
    description: 'Firestore real-time listeners, Firebase Auth, Cloud Messaging (FCM), and cloud function triggers.',
    relatedProject: { name: 'Maison: The Property App' },
    color: 'rgba(245, 158, 11, 0.9)',
    accentHex: '#F59E0B',
  }
];

// Pre-computed 3D Orbital Constellation positions
interface SphereNode {
  item: MobileTechItem;
  // Base 3D coordinates on unit orbit
  x0: number;
  y0: number;
  z0: number;
  // Dynamic projected coordinates
  x: number;
  y: number;
  z: number;
  screenX: number;
  screenY: number;
  scale: number;
  alpha: number;
}

interface HistoryPoint {
  x: number;
  y: number;
  time: number;
}

export default function MobileSphereTechStack() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedTech, setSelectedTech] = useState<MobileTechItem>(mobileTechList[1]); // Default to React
  const [isInteracting, setIsInteracting] = useState(false);

  // Rotation angles and velocities
  const rotationRef = useRef({
    angleX: 0.15,
    angleY: 0.4,
    velX: 0,
    velY: 0.0022, // gentle ambient spin
  });

  // Programmatic rotation target (for smooth step / tap transitions)
  const targetAngleYRef = useRef<number | null>(null);
  const targetAngleXRef = useRef<number | null>(null);

  // Selected & Centered tracking refs for fast 60/120fps synchronization without render thrashing
  const selectedTechIdRef = useRef<string>(mobileTechList[1].id);
  const centeredNodeIdRef = useRef<string>(mobileTechList[1].id);
  const lastStateUpdateTimeRef = useRef<number>(0);

  // Drag tracking & Velocity history buffer
  const touchStateRef = useRef({
    isDown: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    startTime: 0,
    hasMoved: false,
  });
  const historyRef = useRef<HistoryPoint[]>([]);

  // Generate 3D spherical positions for all tech nodes using Fibonacci golden spiral
  const nodesRef = useRef<SphereNode[]>([]);

  useEffect(() => {
    const N = mobileTechList.length;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const phi = 2 * Math.PI * (1 - 1 / goldenRatio); // golden angle ~2.39996 rad

    nodesRef.current = mobileTechList.map((item, i) => {
      // Fibonacci sphere distribution for uniform spherical 3D coverage
      const y0 = 1 - (i / (N - 1)) * 2; // from 1 (north pole) to -1 (south pole)
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y0 * y0));
      const theta = phi * i;

      const x0 = Math.cos(theta) * radiusAtY;
      const z0 = Math.sin(theta) * radiusAtY;

      return {
        item,
        x0,
        y0,
        z0,
        x: x0,
        y: y0,
        z: z0,
        screenX: 0,
        screenY: 0,
        scale: 1,
        alpha: 1,
      };
    });

    // Initialize rotation angle so React (item index 1) is front and center
    const reactNode = nodesRef.current[1];
    if (reactNode) {
      const r = Math.sqrt(reactNode.x0 * reactNode.x0 + reactNode.z0 * reactNode.z0);
      rotationRef.current.angleY = Math.atan2(reactNode.x0, reactNode.z0);
      rotationRef.current.angleX = Math.atan2(reactNode.y0, Math.max(0.001, r));
    }
  }, []);

  // Pre-generate background satellite signal points for rich celestial depth
  const satellitesRef = useRef<Array<{ x0: number; y0: number; z0: number }>>([]);
  useEffect(() => {
    const count = 30;
    const sats = [];
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 0.80 + Math.random() * 0.25;
      const sinPhi = Math.sin(phi);
      sats.push({
        x0: r * sinPhi * Math.cos(theta),
        y0: r * Math.cos(phi),
        z0: r * sinPhi * Math.sin(theta),
      });
    }
    satellitesRef.current = sats;
  }, []);

  // Smooth programmatic animation to a specific technology index
  const animateToIndex = (index: number) => {
    const node = nodesRef.current[index];
    if (!node) return;

    const targetY = Math.atan2(node.x0, node.z0);
    const r = Math.sqrt(node.x0 * node.x0 + node.z0 * node.z0);
    const targetX = Math.atan2(node.y0, Math.max(0.001, r));

    const rot = rotationRef.current;

    // Calculate shortest angular path for angleY around 2*PI circle
    const twoPi = 2 * Math.PI;
    const currentWrapped = ((rot.angleY % twoPi) + twoPi) % twoPi;
    const targetWrapped = ((targetY % twoPi) + twoPi) % twoPi;
    let diffY = targetWrapped - currentWrapped;
    if (diffY > Math.PI) diffY -= twoPi;
    if (diffY < -Math.PI) diffY += twoPi;

    targetAngleYRef.current = rot.angleY + diffY;
    targetAngleXRef.current = targetX;
    rot.velX = 0;
    rot.velY = 0;

    const item = mobileTechList[index];
    selectedTechIdRef.current = item.id;
    centeredNodeIdRef.current = item.id;
    setSelectedTech(item);
  };

  // Main Canvas Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const updateDimensions = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width || 340;
      height = Math.min(380, Math.max(320, width * 0.95));

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions, { passive: true });

    // Render loop
    const render = () => {
      const rot = rotationRef.current;
      const touch = touchStateRef.current;

      // 1. Inertia & Ambient rotation physics
      if (!touch.isDown) {
        if (targetAngleYRef.current !== null && targetAngleXRef.current !== null) {
          const diffY = targetAngleYRef.current - rot.angleY;
          const diffX = targetAngleXRef.current - rot.angleX;
          rot.angleY += diffY * 0.12;
          rot.angleX += diffX * 0.12;
          if (Math.abs(diffY) < 0.001 && Math.abs(diffX) < 0.001) {
            rot.angleY = targetAngleYRef.current;
            rot.angleX = targetAngleXRef.current;
            targetAngleYRef.current = null;
            targetAngleXRef.current = null;
          }
        } else {
          // Premium fluid deceleration (velocity-based inertia)
          const friction = 0.952; // gentle smooth decay
          rot.velY *= friction;
          rot.velX *= friction;

          // Seamless transition into ambient slow cruise when momentum settles
          if (Math.abs(rot.velY) < 0.0012 && Math.abs(rot.velX) < 0.0012) {
            const ambient = 0.0020;
            rot.velY = rot.velY * 0.94 + ambient * 0.06;
            rot.velX = 0;
          }

          rot.angleY += rot.velY;
          rot.angleX += rot.velX;
        }
      }

      // Allow full vertical tilt range so poles can reach the equator/center, but prevent inversion
      rot.angleX = Math.max(-1.50, Math.min(1.50, rot.angleX));

      // Trig values for 3D rotation matrix
      const cosX = Math.cos(rot.angleX);
      const sinX = Math.sin(rot.angleX);
      const cosY = Math.cos(rot.angleY);
      const sinY = Math.sin(rot.angleY);

      const centerX = width / 2;
      const centerY = height / 2;
      const sphereRadius = Math.min(width, height) * 0.41;
      const fov = 380;

      ctx.clearRect(0, 0, width, height);

      // 1. Atmospheric globe backdrop
      const bgGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        sphereRadius * 0.12,
        centerX,
        centerY,
        sphereRadius * 1.15
      );
      bgGrad.addColorStop(0, 'rgba(78, 133, 191, 0.09)');
      bgGrad.addColorStop(0.5, 'rgba(16, 185, 129, 0.04)');
      bgGrad.addColorStop(0.85, 'rgba(10, 15, 25, 0.4)');
      bgGrad.addColorStop(1, 'rgba(9, 9, 9, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, sphereRadius * 1.08, 0, Math.PI * 2);
      ctx.fillStyle = bgGrad;
      ctx.fill();

      // Subtle outer globe boundary ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, sphereRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 2. Rotate and project background satellite signals
      satellitesRef.current.forEach((sat) => {
        const x1 = sat.x0 * cosY - sat.z0 * sinY;
        const z1 = sat.z0 * cosY + sat.x0 * sinY;
        const y1 = sat.y0 * cosX - z1 * sinX;
        const z2 = z1 * cosX + sat.y0 * sinX;

        const scale = fov / (fov + z2 * sphereRadius);
        const sx = centerX + x1 * sphereRadius * scale;
        const sy = centerY + y1 * sphereRadius * scale;
        const alpha = Math.max(0.08, (z2 + 1) / 2) * 0.35;

        ctx.beginPath();
        ctx.arc(sx, sy, 1.2 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(137, 170, 204, ${alpha})`;
        ctx.fill();
      });

      // 3. Rotate and project primary Technology Nodes
      const projectedNodes = nodesRef.current.map((node) => {
        // Rotate around Y axis (continuous 360-degree loop)
        const x1 = node.x0 * cosY - node.z0 * sinY;
        const z1 = node.z0 * cosY + node.x0 * sinY;

        // Rotate around X axis (pitch tilt)
        const y1 = node.y0 * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y0 * sinX;

        node.x = x1;
        node.y = y1;
        node.z = z2;

        const scale = fov / (fov + z2 * sphereRadius);
        node.scale = scale;
        node.screenX = centerX + x1 * sphereRadius * scale;
        node.screenY = centerY + y1 * sphereRadius * scale;

        const normalizedZ = (z2 + 1) / 2; // 0 (back) to 1 (front)
        node.alpha = Math.max(0.20, Math.pow(normalizedZ, 1.2));

        return node;
      });

      // 4. Automatic Center Node Detection & Highlighting
      // Find the node currently closest to the front-facing screen center
      let frontCenterNode: SphereNode | null = null;
      let minCenterScore = Infinity;

      for (let i = 0; i < projectedNodes.length; i++) {
        const node = projectedNodes[i];
        if (node.z > -0.05) { // foreground / front-facing hemisphere
          const dx = node.screenX - centerX;
          const dy = node.screenY - centerY;
          // Weighted distance: horizontal centering is primary, depth (z) adds priority
          const dist = Math.hypot(dx, dy * 1.5);
          const score = dist - node.z * 35;
          if (score < minCenterScore) {
            minCenterScore = score;
            frontCenterNode = node;
          }
        }
      }

      if (frontCenterNode) {
        centeredNodeIdRef.current = frontCenterNode.item.id;

        // Automatically update the selected tech in React state
        if (frontCenterNode.item.id !== selectedTechIdRef.current) {
          const now = Date.now();
          // Real-time update throttled so high-speed flicks don't stutter
          if (now - lastStateUpdateTimeRef.current > 55 || Math.abs(rot.velY) < 0.015) {
            lastStateUpdateTimeRef.current = now;
            selectedTechIdRef.current = frontCenterNode.item.id;
            setSelectedTech(frontCenterNode.item);
          }
        }
      }

      // 5. Draw Central HUD Target Reticle (Tactical Observatory Crosshair + Corner Brackets)
      ctx.save();
      const activeHex = frontCenterNode ? frontCenterNode.item.accentHex : '#4E85BF';
      const reticlePulse = (Math.sin(Date.now() * 0.004) + 1) / 2; // 0 to 1

      // Subtle 3D astrolabe latitude guide ellipse
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, sphereRadius * 0.94, Math.max(4, Math.abs(sphereRadius * 0.94 * sinX)), 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Observatory Crosshair Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX - 18, centerY);
      ctx.lineTo(centerX - 7, centerY);
      ctx.moveTo(centerX + 7, centerY);
      ctx.lineTo(centerX + 18, centerY);
      ctx.moveTo(centerX, centerY - 18);
      ctx.lineTo(centerX, centerY - 7);
      ctx.moveTo(centerX, centerY + 7);
      ctx.lineTo(centerX, centerY + 18);
      ctx.stroke();

      // Tactical Corner Brackets around center target [ + ]
      const bDist = 20;
      const bLen = 6;
      ctx.strokeStyle = `${activeHex}${Math.round((0.35 + reticlePulse * 0.45) * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      // Top-Left
      ctx.moveTo(centerX - bDist, centerY - bDist + bLen);
      ctx.lineTo(centerX - bDist, centerY - bDist);
      ctx.lineTo(centerX - bDist + bLen, centerY - bDist);
      // Top-Right
      ctx.moveTo(centerX + bDist - bLen, centerY - bDist);
      ctx.lineTo(centerX + bDist, centerY - bDist);
      ctx.lineTo(centerX + bDist, centerY - bDist + bLen);
      // Bottom-Left
      ctx.moveTo(centerX - bDist, centerY + bDist - bLen);
      ctx.lineTo(centerX - bDist, centerY + bDist);
      ctx.lineTo(centerX - bDist + bLen, centerY + bDist);
      // Bottom-Right
      ctx.moveTo(centerX + bDist - bLen, centerY + bDist);
      ctx.lineTo(centerX + bDist, centerY + bDist);
      ctx.lineTo(centerX + bDist, centerY + bDist - bLen);
      ctx.stroke();

      // Central reticle guide circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
      ctx.strokeStyle = `${activeHex}33`;
      ctx.stroke();
      ctx.restore();

      // 6. Draw constellation connection mesh between nearby nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        const n1 = projectedNodes[i];
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n2 = projectedNodes[j];

          // 3D Euclidean distance on unit sphere
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dz = n1.z - n2.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Connect neighboring nodes across the 3D Fibonacci constellation
          const shouldConnect = dist3D < 0.88;

          if (shouldConnect) {
            const avgZ = (n1.z + n2.z) / 2;
            const lineAlpha = Math.max(0.04, ((avgZ + 1) / 2) * 0.26);

            const isConnectedToActive =
              n1.item.id === centeredNodeIdRef.current || n2.item.id === centeredNodeIdRef.current;

            ctx.beginPath();
            ctx.moveTo(n1.screenX, n1.screenY);
            ctx.lineTo(n2.screenX, n2.screenY);

            if (isConnectedToActive && avgZ > -0.2) {
              ctx.strokeStyle = activeHex;
              ctx.globalAlpha = Math.min(0.85, lineAlpha * 3.4);
              ctx.lineWidth = 1.3;
            } else {
              ctx.strokeStyle = '#FFFFFF';
              ctx.globalAlpha = lineAlpha;
              ctx.lineWidth = 0.7;
            }
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // 7. Sort nodes by Z (back to front painter's algorithm)
      const sortedNodes = [...projectedNodes].sort((a, b) => a.z - b.z);

      // 8. Draw nodes and badges (All 16 nodes permanently active)
      sortedNodes.forEach((node) => {
        const isCentered = node.item.id === centeredNodeIdRef.current;
        const isFront = node.z > 0;
        const baseRadius = (isCentered ? 5.8 : 3.8) * node.scale;
        const nodeAlpha = node.alpha;

        // Outer glow halo for front nodes or centered node
        if (isCentered || isFront) {
          const haloGrad = ctx.createRadialGradient(
            node.screenX,
            node.screenY,
            0,
            node.screenX,
            node.screenY,
            baseRadius * (isCentered ? 4.0 : 2.4)
          );

          if (isCentered) {
            haloGrad.addColorStop(0, `${node.item.accentHex}aa`);
            haloGrad.addColorStop(1, `${node.item.accentHex}00`);
          } else if (node.item.type === 'data') {
            haloGrad.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
            haloGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
          } else if (node.item.type === 'learning') {
            haloGrad.addColorStop(0, 'rgba(234, 179, 8, 0.4)');
            haloGrad.addColorStop(1, 'rgba(234, 179, 8, 0)');
          } else {
            haloGrad.addColorStop(0, 'rgba(78, 196, 191, 0.4)');
            haloGrad.addColorStop(1, 'rgba(78, 196, 191, 0)');
          }

          ctx.beginPath();
          ctx.arc(
            node.screenX,
            node.screenY,
            baseRadius * (isCentered ? 4.0 : 2.4),
            0,
            Math.PI * 2
          );
          ctx.fillStyle = haloGrad;
          ctx.fill();
        }

        // Inner solid node circle
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, baseRadius, 0, Math.PI * 2);
        if (isCentered) {
          ctx.fillStyle = '#FFFFFF';
        } else if (node.item.type === 'data') {
          ctx.fillStyle = `rgba(16, 185, 129, ${nodeAlpha})`;
        } else if (node.item.type === 'learning') {
          ctx.fillStyle = `rgba(234, 179, 8, ${nodeAlpha})`;
        } else {
          ctx.fillStyle = `rgba(78, 133, 191, ${nodeAlpha})`;
        }
        ctx.fill();

        // Node outline border
        ctx.strokeStyle = '#090909';
        ctx.lineWidth = 1.2 * node.scale;
        ctx.stroke();

        // Target reticle radar ring for CENTERED node
        if (isCentered) {
          const pulse = (Math.sin(Date.now() * 0.005) + 1) / 2; // 0 to 1
          const ringRadius = baseRadius * (2.4 + pulse * 0.8);

          ctx.beginPath();
          ctx.arc(node.screenX, node.screenY, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `${node.item.accentHex}${Math.round((0.45 + pulse * 0.45) * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 1.6;
          ctx.stroke();

          // Subtle dashed outer target ring
          ctx.save();
          ctx.setLineDash([3, 4]);
          ctx.beginPath();
          ctx.arc(node.screenX, node.screenY, ringRadius + 6, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }

        // 9. Typography labels
        const shouldShowLabel = isCentered || node.z > -0.25;

        if (shouldShowLabel) {
          const fontSize = Math.max(9, Math.min(12, Math.round(10.5 * node.scale)));
          ctx.font = isCentered
            ? `bold ${fontSize + 1}px monospace`
            : `600 ${fontSize}px sans-serif`;

          const text = node.item.name;
          const textY = node.screenY + (isCentered ? 16 : 14) * node.scale;

          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';

          ctx.strokeStyle = 'rgba(9, 9, 9, 0.9)';
          ctx.lineWidth = 3.2;
          ctx.strokeText(text, node.screenX, textY);

          if (isCentered) {
            ctx.fillStyle = '#FFFFFF';
          } else if (isFront) {
            ctx.fillStyle = `rgba(245, 245, 245, ${Math.max(0.5, nodeAlpha)})`;
          } else {
            ctx.fillStyle = `rgba(141, 141, 141, ${nodeAlpha * 0.75})`;
          }
          ctx.fillText(text, node.screenX, textY);
        }
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const container = containerRef.current;
    const preventSelect = (e: Event) => e.preventDefault();
    if (container) {
      container.addEventListener('selectstart', preventSelect);
    }

    return () => {
      window.removeEventListener('resize', updateDimensions);
      cancelAnimationFrame(animId);
      if (container) {
        container.removeEventListener('selectstart', preventSelect);
      }
    };
  }, []);

  // Touch & Pointer gesture listeners with velocity-based inertia tracking
  const handleStart = useCallback((clientX: number, clientY: number) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    touchStateRef.current = {
      isDown: true,
      startX: clientX,
      startY: clientY,
      lastX: clientX,
      lastY: clientY,
      startTime: Date.now(),
      hasMoved: false,
    };
    historyRef.current = [{ x: clientX, y: clientY, time: Date.now() }];
    targetAngleYRef.current = null;
    targetAngleXRef.current = null; // User takes immediate manual control

    const rot = rotationRef.current;
    rot.velX = 0;
    rot.velY = 0;
    setIsInteracting(true);
  }, []);

  const handleMove = useCallback((clientX: number, clientY: number) => {
    if (!touchStateRef.current.isDown) return;
    const state = touchStateRef.current;
    const now = Date.now();

    const deltaX = clientX - state.lastX;
    const deltaY = clientY - state.lastY;

    const totalDist = Math.hypot(clientX - state.startX, clientY - state.startY);
    if (totalDist > 3) {
      state.hasMoved = true;
    }

    // Record pointer history for velocity calculation
    historyRef.current.push({ x: clientX, y: clientY, time: now });
    const cutoff = now - 100;
    while (historyRef.current.length > 2 && historyRef.current[0].time < cutoff) {
      historyRef.current.shift();
    }

    const rot = rotationRef.current;
    // Fluid, highly responsive drag sensitivity (allows dragging freely from one side to another)
    const sensitivityX = 0.0095;
    const sensitivityY = 0.0095;

    rot.angleY += deltaX * sensitivityX;
    rot.angleX += -deltaY * sensitivityY;

    // Full vertical range so poles can be inspected at the center equator without inversion
    rot.angleX = Math.max(-1.50, Math.min(1.50, rot.angleX));

    state.lastX = clientX;
    state.lastY = clientY;
  }, []);

  const handleEnd = useCallback(() => {
    const state = touchStateRef.current;
    if (!state.isDown) return;
    state.isDown = false;
    setIsInteracting(false);

    const now = Date.now();
    const touchDuration = now - state.startTime;

    const history = historyRef.current;
    let releaseVx = 0;
    let releaseVy = 0;

    if (history.length >= 2) {
      const newest = history[history.length - 1];
      let sample = history[0];
      for (let i = history.length - 2; i >= 0; i--) {
        if (newest.time - history[i].time <= 75) {
          sample = history[i];
        } else {
          break;
        }
      }
      const dt = newest.time - sample.time;
      if (dt > 6) {
        releaseVx = (newest.x - sample.x) / dt; // px per millisecond
        releaseVy = (newest.y - sample.y) / dt;
      }
    }

    const rot = rotationRef.current;

    if (state.hasMoved) {
      // Transfer drag velocity to rotational inertia
      const flickFactor = 0.012;
      const computedVelY = releaseVx * flickFactor;
      const computedVelX = -releaseVy * flickFactor;

      // Clamp velocity to a comfortable premium range
      rot.velY = Math.max(-0.08, Math.min(0.08, computedVelY));
      rot.velX = Math.max(-0.05, Math.min(0.05, computedVelX));
    } else {
      // Tap detection to select / center node
      if (touchDuration < 350 && canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const tapX = state.startX - rect.left;
        const tapY = state.startY - rect.top;

        let closestNode: SphereNode | null = null;
        let minDistance = 40;

        nodesRef.current.forEach((node) => {
          const dist = Math.hypot(node.screenX - tapX, node.screenY - tapY);
          const depthPenalty = node.z < 0 ? 15 : 0;
          if (dist + depthPenalty < minDistance) {
            minDistance = dist + depthPenalty;
            closestNode = node;
          }
        });

        if (closestNode) {
          const tappedItem = (closestNode as SphereNode).item;
          const index = mobileTechList.findIndex((t) => t.id === tappedItem.id);
          if (index !== -1) {
            animateToIndex(index);
          }
        }
      }
    }

    // Ensure currently centered node is immediately synchronized to state on release
    if (centeredNodeIdRef.current !== selectedTechIdRef.current) {
      const currentCentered = mobileTechList.find((t) => t.id === centeredNodeIdRef.current);
      if (currentCentered) {
        selectedTechIdRef.current = currentCentered.id;
        setSelectedTech(currentCentered);
      }
    }
  }, []);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    handleStart(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse handlers for desktop/emulator testing
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (touchStateRef.current.isDown) {
      e.preventDefault();
      if (typeof window !== 'undefined' && window.getSelection) {
        window.getSelection()?.removeAllRanges();
      }
    }
    handleMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Reset view to React
  const handleResetView = () => {
    animateToIndex(1);
  };

  // Step next/prev technology
  const handleStepTech = (dir: 1 | -1) => {
    const currentIndex = mobileTechList.findIndex((t) => t.id === selectedTech.id);
    const nextIndex = (currentIndex + dir + mobileTechList.length) % mobileTechList.length;
    animateToIndex(nextIndex);
  };

  return (
    <div
      className="w-full flex flex-col items-center select-none"
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
    >
      {/* 1. Header Bar: Orbit Status & Quick Controls */}
      <div className="w-full flex flex-col gap-2.5 mb-2">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#89AACC] font-bold">
              16 technologies mapped
            </span>
          </div>
          <button
            onClick={handleResetView}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-text text-[10px] font-mono hover:text-white transition-colors active:scale-95"
            aria-label="Reset 3D constellation orientation"
          >
            <RotateCcw className="w-3 h-3" />
            <span>RESET</span>
          </button>
        </div>

        {/* Legend Indicators */}
        <div className="flex items-center justify-between px-2 pt-1 border-t border-white/5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4E85BF] shadow-[0_0_6px_#4E85BF]" />
              <span className="font-mono text-[9px] text-muted-text uppercase">Core</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]" />
              <span className="font-mono text-[9px] text-muted-text uppercase">Data</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_6px_#EAB308]" />
              <span className="font-mono text-[9px] text-muted-text uppercase">Learning</span>
            </div>
          </div>

          <span className="font-mono text-[9px] text-muted-text/80 italic">
            {isInteracting ? 'Orbiting in 3D...' : 'Drag freely in 3D'}
          </span>
        </div>
      </div>

      {/* 2. Interactive 3D Sphere Canvas Viewport */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ touchAction: 'none', userSelect: 'none', WebkitUserSelect: 'none' }}
        className="relative w-full aspect-square max-w-[360px] my-1 flex items-center justify-center select-none touch-none cursor-grab active:cursor-grabbing"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block pointer-events-none"
        />

        {/* Subtle Guidance Overlay on first interaction */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-muted-text/90 whitespace-nowrap select-none">
          Drag freely • Auto-centers into focus
        </div>
      </div>

      {/* 3. Bottom Attached Detail Card (Direct homage to saasocalypse bottom card) */}
      <div className="w-full mt-2 select-none">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="w-full p-5 rounded-3xl bg-[#111111]/95 border backdrop-blur-xl shadow-2xl text-left relative overflow-hidden transition-[border-color,box-shadow] duration-300 select-none"
          style={{
            borderColor: `${selectedTech.accentHex}33`,
            boxShadow: `0 10px 30px -10px rgba(0,0,0,0.8), 0 0 20px -6px ${selectedTech.accentHex}22`,
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
        >
          {/* Top glowing ambient accent stripe */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300"
            style={{
              backgroundColor: selectedTech.accentHex,
              boxShadow: `0 0 10px ${selectedTech.accentHex}`
            }}
          />

          {/* Ambient soft glow in corner matching skill accent */}
          <div
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-colors duration-500 opacity-20"
            style={{ backgroundColor: selectedTech.accentHex }}
          />

          {/* Header: Title and Badges */}
          <div className="flex items-start justify-between gap-3 mb-3 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2 h-2 rounded-full transition-all duration-300 shrink-0"
                  style={{
                    backgroundColor: selectedTech.accentHex,
                    boxShadow: `0 0 6px ${selectedTech.accentHex}`
                  }}
                />
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-text font-bold">
                  {`${selectedTech.category} • ${selectedTech.type}`}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#F5F5F5] tracking-tight">
                {selectedTech.name}
              </h3>
            </div>

            <div className="flex flex-col items-end gap-1.5 shrink-0">
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] font-bold text-[#F5F5F5]">
                {selectedTech.experience}
              </span>
              <span
                className="font-mono text-[9px] font-bold transition-colors duration-300"
                style={{ color: selectedTech.accentHex }}
              >
                {selectedTech.level}% PROFICIENCY
              </span>
            </div>
          </div>

          {/* Description Body */}
          <p className="font-sans text-xs text-muted-text leading-relaxed mb-4 relative z-10 min-h-[2.5rem]">
            {selectedTech.description}
          </p>

          {/* Bottom Meta & Action Controls */}
          <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/5 relative z-10">
            {selectedTech.relatedProject ? (
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#89AACC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span className="truncate max-w-[170px]">
                  Shipped in <strong>{selectedTech.relatedProject.name}</strong>
                </span>
              </div>
            ) : (
              <div className="text-[10px] font-mono text-muted-text">
                Production Tested
              </div>
            )}

            {/* Prev / Next Node navigation shortcuts */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleStepTech(-1)}
                aria-label="Previous skill"
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-muted-text text-[11px] font-mono hover:text-white active:scale-90 transition-transform"
              >
                PREV
              </button>
              <button
                onClick={() => handleStepTech(1)}
                aria-label="Next skill"
                className="px-2.5 py-1 rounded-lg border text-[11px] font-mono font-bold hover:text-white active:scale-90 transition-all"
                style={{
                  backgroundColor: `${selectedTech.accentHex}20`,
                  borderColor: `${selectedTech.accentHex}60`,
                  color: selectedTech.accentHex,
                }}
              >
                NEXT
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
