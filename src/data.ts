import { Product } from './types';

export const products: Product[] = [
  {
    id: 'p5',
    name: 'Runway Gen-3',
    category: 'Video Generation',
    description: 'Create ultra-realistic video content from text and image prompts with a powerful AI video generation model designed to augment human creativity.',
    features: ['Text to Video', 'High fidelity & consistency', 'Advanced camera controls'],
    rating: 4.9,
    priceModel: 'From $15/mo',
    link: 'https://runwayml.com',
    colorScheme: {
      bg: 'bg-gray-100',
      text: 'text-gray-900',
      border: 'border-gray-200'
    }
  },
  {
    id: 'p6',
    name: 'HeyGen',
    category: 'AI Avatars',
    description: 'Produce professional AI-avatar videos in minutes without a camera or crew. Perfect for marketing, training, and sales outreach.',
    features: ['Custom AI Avatars', 'Voice cloning in 40+ languages', 'API integration'],
    rating: 4.8,
    priceModel: 'From $29/mo',
    link: 'https://www.heygen.com',
    colorScheme: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-600',
      border: 'border-indigo-200'
    }
  },
  {
    id: 'p7',
    name: 'ElevenLabs',
    category: 'Voice Generation',
    description: 'The ultimate AI voice generator rendering human intonation and inflections with unprecedented fidelity. Go-to solution for creators.',
    features: ['Hyper-realistic text-to-speech', 'Instant voice cloning', 'Dubbing automation'],
    rating: 4.9,
    priceModel: 'Freemium ($5/mo Creator)',
    link: 'https://elevenlabs.io',
    colorScheme: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      border: 'border-orange-200'
    }
  },
  {
    id: 'p8',
    name: 'Descript',
    category: 'Video Editing',
    description: 'Edit your podcasts and videos as easily as editing a text document. Fix audio mistakes with AI and automatically generate transcripts.',
    features: ['Text-based video editing', 'Studio Sound AI', 'Overdub voice generation'],
    rating: 4.7,
    priceModel: 'From $15/mo',
    link: 'https://www.descript.com',
    colorScheme: {
      bg: 'bg-teal-100',
      text: 'text-teal-600',
      border: 'border-teal-200'
    }
  },
  {
    id: 'p9',
    name: 'InVideo AI',
    category: 'Video Generation',
    description: 'Turn a simple text prompt into a ready-to-publish video. InVideo AI generates the script, creates scenes, and adds voiceovers automatically.',
    features: ['Prompt-to-video', 'Extensive stock library', 'Multi-language voiceovers'],
    rating: 4.6,
    priceModel: 'From $25/mo',
    link: 'https://invideo.io',
    colorScheme: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-200'
    }
  }
];
