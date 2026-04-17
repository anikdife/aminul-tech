export interface Project {
  id: number
  title: string
  description: string
  category: 'web' | 'android' | 'desktop'
  tech: string[]
  gradient: string
  github?: string
  live?: string
  featured: boolean
  platform?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'PDFStudio.tech',
    description:
      'A client-heavy, zero-server PDF powerhouse running entirely in the browser via Web Workers and optimized rendering pipelines. Handles multi-page rendering, merges, splits, crops, rotations, and image injection with full undo/redo — bridging Google Drive OAuth sync with Firebase Storage for seamless cloud-first document workflows.',
    category: 'web',
    tech: ['React (TSX)', 'Vite', 'pdf.js', 'pdf-lib', 'Web Workers', 'Zustand', 'Firebase', 'Google Drive API'],
    gradient: 'linear-gradient(135deg, #1a0505 0%, #4a0d0d 55%, #2a0808 100%)',
    featured: true,
    live: 'https://pdfstudio.tech',
  },
  {
    id: 2,
    title: 'Arousha.art',
    description:
      'An AI-driven NAPLAN preparation platform that auto-evaluates student writing through structured LLM prompt chains, returning granular performance analytics, strengths/weaknesses breakdowns, and targeted improvement paths. Backed by Firebase for real-time session management and pdf-lib for submission archiving.',
    category: 'web',
    tech: ['React', 'Redux', 'Firebase Firestore', 'Firebase Storage', 'OpenAI API', 'pdf-lib'],
    gradient: 'linear-gradient(135deg, #05101a 0%, #0d2a4a 55%, #081828 100%)',
    featured: true,
    live: 'https://arousha.art',
  },
  {
    id: 4,
    title: 'AyahVerse',
    description:
      'A feature-rich Quran intelligence app integrating multi-language tafsir via API, multi-reciter audio playback, and word-by-word linguistic breakdown. The roadmap includes an ML-based Tajweed correction engine leveraging Vosk and wav2vec2 for real-time pronunciation accuracy — pushing the boundary of Islamic EdTech.',
    category: 'android',
    tech: ['Kotlin', 'Android SDK', 'Supabase (PostgreSQL)', 'Tafsir API', 'Vosk (planned)', 'wav2vec2'],
    gradient: 'linear-gradient(135deg, #051a0a 0%, #0d4a1a 55%, #082810 100%)',
    platform: 'Android',
    featured: true,
  },
  {
    id: 5,
    title: 'Blood Donation App',
    description:
      'A real-time, location-aware donor-recipient matching system with privacy-first contact abstraction — matching by blood group and geolocation proximity without exposing personal details. Features push notifications, identity verification via image upload, and an in-app messaging layer over Firebase for zero-friction urgent requests.',
    category: 'android',
    tech: ['Flutter', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'Geolocation API', 'FCM Push Notifications'],
    gradient: 'linear-gradient(135deg, #1a0505 0%, #500d0d 55%, #2a0808 100%)',
    platform: 'Android / iOS',
    featured: false,
  },
  {
    id: 6,
    title: 'Desktop in Palm',
    description:
      'An end-to-end remote desktop prototype over the open internet: a C-native client (libwebsockets) holds a persistent session through a Cloudflare Durable Object relay, while a mobile web UI sends authenticated commands to any registered desktop by machine ID — architected for secure, globally routed cross-device control with near-zero relay overhead.',
    category: 'desktop',
    tech: ['C', 'libwebsockets', 'CMake', 'Cloudflare Workers', 'Durable Objects', 'TypeScript', 'WebSocket'],
    gradient: 'linear-gradient(135deg, #060e1a 0%, #0a2040 55%, #071428 100%)',
    platform: 'Windows & Linux',
    featured: true,
  },
  {
    id: 7,
    title: 'CivicMesh++',
    description:
      'A distributed IDS framework for encrypted network environments (TLS 1.3 / QUIC) — leveraging eBPF kernel hooks for zero-overhead flow metadata extraction, feeding a distributed ML pipeline for anomaly detection across edge and central analysis tiers without ever decrypting traffic. Research-grade systems engineering meets practical network security.',
    category: 'desktop',
    tech: ['eBPF', 'Linux Kernel', 'C', 'Python', 'CICIDS2017 Dataset', 'Distributed ML'],
    gradient: 'linear-gradient(135deg, #041204 0%, #082808 55%, #051505 100%)',
    platform: 'Linux',
    featured: false,
  },
  {
    id: 8,
    title: 'aminul.tech',
    description:
      'This portfolio itself — engineered as a showpiece of frontend craft. Canvas-based interactive particle systems, scroll-driven reveal animations, typewriter role cycling, and a dark-futuristic design system built from scratch in pure React + CSS. No UI libraries. Every pixel intentional.',
    category: 'web',
    tech: ['React (TSX)', 'Vite', 'Canvas API', 'Framer Motion', 'Three.js', 'Firebase Hosting'],
    gradient: 'linear-gradient(135deg, #020c18 0%, #0a2040 55%, #040f20 100%)',
    featured: false,
    live: '#',
  },
]
