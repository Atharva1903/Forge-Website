export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureTab {
  id: string;
  label: string;
  icon: string;
}

export interface Persona {
  id: string;
  label: string;
  title: string;
  description: string;
  quote: string;
  metrics: { label: string; value: string }[];
  bgImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface Article {
  id: string;
  tag: string;
  title: string;
  readTime: string;
  date: string;
  image: string;
}

export const navLinks: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'App', href: '#app' },
  { label: 'Plans', href: '#plans' },
  { label: 'Articles', href: '#articles' },
];

export const heroTabs = [
  { id: 'habits', label: 'Habit Tracking', icon: 'Flame' },
  { id: 'goals', label: 'Goal Milestones', icon: 'Target' },
  { id: 'routines', label: 'Custom Routines', icon: 'Clock' },
  { id: 'ai', label: 'Smart Predictions', icon: 'Sparkles' },
];

export const solutionFilterTabs = [
  { id: 'streaks', label: 'Habit Streaks' },
  { id: 'focus', label: 'Focus Time' },
  { id: 'goals', label: 'Goal Progress' },
  { id: 'routines', label: 'Routines' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'assistant', label: 'AI Coach' },
];

export const solutionScreens: Record<string, { title: string; subtitle: string; badge: string; metrics: { label: string; val: string }[] }> = {
  streaks: {
    title: 'Daily Consistency Dashboard',
    subtitle: 'Track your active streaks, habit score, and daily momentum at a single glance.',
    badge: '14 DAY STREAK',
    metrics: [
      { label: 'Current Streak', val: '14 Days' },
      { label: 'Completion Rate', val: '94%' },
      { label: 'Weekly Peak', val: 'Friday' },
    ],
  },
  focus: {
    title: 'Deep Focus & Flow Analytics',
    subtitle: 'Measure your distraction-free deep work hours and optimize energy windows.',
    badge: '4.5 HRS TODAY',
    metrics: [
      { label: 'Focus Score', val: '92 / 100' },
      { label: 'Deep Work', val: '4h 30m' },
      { label: 'Interruptions', val: '0' },
    ],
  },
  goals: {
    title: 'Milestone & Target Tracker',
    subtitle: 'Break down multi-month ambitions into daily actionable micro-goals.',
    badge: '78% COMPLETED',
    metrics: [
      { label: 'Active Goals', val: '4 Goals' },
      { label: 'Milestones Met', val: '18 / 22' },
      { label: 'Target Date', val: 'Oct 30' },
    ],
  },
  routines: {
    title: 'Morning & Evening Rituals',
    subtitle: 'Curate high-impact daily stacks that automate habit execution.',
    badge: 'MORNING STACK',
    metrics: [
      { label: 'Morning Ritual', val: '5 / 5 Done' },
      { label: 'Night Reset', val: '4 / 4 Done' },
      { label: 'Avg Pace', val: '35 mins' },
    ],
  },
  analytics: {
    title: 'Behavioral Insights & Trends',
    subtitle: 'Discover correlations between sleep, focus, habits, and productivity output.',
    badge: 'PEAK PRODUCTIVITY',
    metrics: [
      { label: 'Top Habit', val: 'Meditation' },
      { label: 'Energy Level', val: '88% High' },
      { label: 'Growth Index', val: '+24%' },
    ],
  },
  assistant: {
    title: 'Forge AI Personal Coach',
    subtitle: 'Get tailored micro-adjustments, streak recovery plans, and motivation prompts.',
    badge: 'AI COACH ACTIVE',
    metrics: [
      { label: 'Nudge Type', val: 'Smart Alert' },
      { label: 'Suggestion', val: 'Drink Water' },
      { label: 'Accuracy', val: '99%' },
    ],
  },
};

export const personas: Persona[] = [
  {
    id: 'achiever',
    label: 'Daily Achiever',
    title: 'Master Consistency with Science-Backed Habit Loops',
    description: 'Designed for ambitious professionals who want to eliminate friction and execute daily goals without burnout.',
    quote: '"Forge helped me maintain a 120-day reading and workout streak while scaling my startup."',
    metrics: [
      { label: 'Consistency Score', value: '96%' },
      { label: 'Pace', value: 'High Intensity' },
    ],
    bgImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'fitness',
    label: 'Fitness Enthusiast',
    title: 'Sync Workouts, Recovery, & Hydration Routines',
    description: 'Track progressive overload, daily step goals, protein intake, and rest days with smart reminders.',
    quote: '"Combining my workout logs with daily habit streaks kept me accountable through my marathon prep."',
    metrics: [
      { label: 'Active Streak', value: '42 Days' },
      { label: 'Weekly Target', value: '6 / 6 Days' },
    ],
    bgImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'executive',
    label: 'Executive & Leader',
    title: 'High-Impact Focus Windows & Time Blocking',
    description: 'Protect strategic focus time, automate recurring review rituals, and track energy levels throughout the workweek.',
    quote: '"The deep work timer and focus analytics freed up 10 hours of wasted meeting time every week."',
    metrics: [
      { label: 'Deep Work', value: '28h / wk' },
      { label: 'Meeting Reduction', value: '-35%' },
    ],
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'nomad',
    label: 'Mindful Creator',
    title: 'Maintain Healthy Boundaries Anywhere in the World',
    description: 'Adapt routine stacks across time zones, track mindfulness rituals, and stay grounded wherever work takes you.',
    quote: '"Traveling across 6 time zones usually breaks my routine. Forge adapted my reminders automatically."',
    metrics: [
      { label: 'Mindfulness', value: '15 mins/day' },
      { label: 'Adaptability', value: '100% Seamless' },
    ],
  bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    handle: '@alexrivera_dev',
    role: 'Senior Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Forge completely transformed my morning routine. Never broken a streak since I started 6 months ago. The smart AI recommendations nudge me right when my willpower dips.',
    rating: 5,
    date: 'Verified User • 2 days ago',
  },
  {
    id: '2',
    name: 'Elena Rostova',
    handle: '@elena_product',
    role: 'Product Director',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    content: 'Replaced 4 different apps (streaks, focus timer, journal, habit tracker) with Forge. The bento grid interface is insanely clean and smooth.',
    rating: 5,
    date: 'Verified User • 5 days ago',
  },
  {
    id: '3',
    name: 'Marcus Chen',
    handle: '@marcus_fitness',
    role: 'Triathlete & Founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'The consistency score and streak protection feature saved me on days I was exhausted. It holds me accountable without feeling punitive.',
    rating: 5,
    date: 'Verified User • 1 week ago',
  },
  {
    id: '4',
    name: 'Sarah Jenkins',
    handle: '@sarah_writes',
    role: 'Author & Journalist',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    content: 'Finished my book draft 3 weeks ahead of deadline thanks to daily 2-hour deep focus blocks logged in Forge. Highly recommended!',
    rating: 5,
    date: 'Verified User • 2 weeks ago',
  },
  {
    id: '5',
    name: 'David Kim',
    handle: '@davidkim_vc',
    role: 'Venture Partner',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content: 'Forge Teams allows our whole investment team to share wellness goals and weekly focus challenges. Building team culture around health has been amazing.',
    rating: 5,
    date: 'Verified User • 3 weeks ago',
  },
  {
    id: '6',
    name: 'Lisa Patel',
    handle: '@lisa_wellness',
    role: 'Mindfulness Coach',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'The energy level correlation with habit completion opened my eyes to when I perform best. Forge is the ultimate personal intelligence tool.',
    rating: 5,
    date: 'Verified User • 1 month ago',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Explorer',
    tagline: 'For individuals starting their consistency journey',
    priceMonthly: 0,
    priceAnnual: 0,
    features: [
      'Up to 5 active habit streaks',
      'Basic routine time tracking',
      '7-day progress history',
      'Standard mobile notifications',
    ],
    cta: 'Get Started Free',
  },
  {
    id: 'pro',
    name: 'Forge Pro',
    tagline: 'For ambitious achievers seeking peak performance',
    priceMonthly: 9.99,
    priceAnnual: 7.99,
    popular: true,
    features: [
      'Unlimited habit & goal streaks',
      'AI Personal Coach & predictive nudges',
      'Advanced deep focus & energy analytics',
      'Streak Protection & Freeze tokens',
      'Unlimited history & CSV export',
      'Widget & Apple Watch / Wear OS sync',
    ],
    cta: 'Start 14-Day Free Trial',
  },
  {
    id: 'teams',
    name: 'Forge Teams',
    tagline: 'For high-performing teams & accountability squads',
    priceMonthly: 19.99,
    priceAnnual: 15.99,
    features: [
      'Everything in Pro for up to 5 members',
      'Shared group habit challenges & leaderboards',
      'Team wellness & focus reporting',
      'Priority 24/7 dedicated support',
      'Custom admin controls & privacy modes',
    ],
    cta: 'Contact Sales',
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'How does Forge help build long-term habits?',
    answer: 'Forge utilizes science-backed behavioral loops (Cue, Routine, Reward) paired with AI predictive notifications that remind you at your exact peak willpower moments, making habit execution effortless.',
  },
  {
    question: 'What happens if I miss a day in my habit streak?',
    answer: 'With Forge Pro, you get Streak Protection tokens that allow you to freeze a streak without resetting your count when life gets unexpectedly busy or when traveling.',
  },
  {
    question: 'Can I track habits and goals offline?',
    answer: 'Yes! Forge works 100% offline. All your habit check-ins, timer logs, and notes save locally on your device and auto-sync seamlessly once you reconnect.',
  },
  {
    question: 'How does the AI Personal Coach function?',
    answer: 'The Forge AI Coach analyzes your check-in patterns, time-of-day completion rates, and focus logs to recommend optimal routine sequencing, micro-adjustments, and encouraging nudges.',
  },
  {
    question: 'Can I sync Forge with my smart watch or health apps?',
    answer: 'Yes, Forge integrates directly with Apple Health, Google Fit, Strava, and smartwatch complications so workouts, steps, and sleep data automatically complete relevant habits.',
  },
  {
    question: 'Is my personal habit and goal data private?',
    answer: 'Absolutely. We use end-to-end encryption for all stored data. We never sell, monetize, or share your personal goals or productivity metrics with third parties.',
  },
  {
    question: 'Can I upgrade, downgrade, or cancel my subscription anytime?',
    answer: 'Yes, you can change your subscription tier or cancel anytime with one click in your account settings. No lock-in contracts or hidden fees.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Goal Mapping & Stack Setup',
    description: 'Define your vision and break it down into daily atomic habits. Build custom morning, work, and evening routine stacks.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Smart Goal Templates', 'Atomic Habit Stacking', 'Time Window Locks'],
  },
  {
    step: '02',
    title: 'Daily Execution & Focus Blocks',
    description: 'Check off daily habits, trigger deep focus timers, and log energy levels with a single tap from your phone or watch.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    highlights: ['One-Tap Checkins', 'Focus Flow Timer', 'Streak Protection'],
  },
  {
    step: '03',
    title: 'Analytics & Mastery Insights',
    description: 'Review weekly growth indices, discover your high-energy windows, and let AI optimize your routine for long-term mastery.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    highlights: ['Consistency Index', 'Energy Correlation', 'AI Nudge Tuning'],
  },
];

export const articles: Article[] = [
  {
    id: '1',
    tag: 'HABIT SCIENCE',
    title: 'The Science of Atomic Habits: How 1% Daily Improvements Compound',
    readTime: '5 min read',
    date: 'Oct 12, 2026',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    tag: 'PRODUCTIVITY',
    title: 'How AI-Powered Nudges Outsmart Willpower Fatigue and Procrastination',
    readTime: '4 min read',
    date: 'Oct 10, 2026',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    tag: 'WELLNESS',
    title: 'Building a High-Performance Morning Routine That Guarantees Focus',
    readTime: '6 min read',
    date: 'Oct 08, 2026',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
];
