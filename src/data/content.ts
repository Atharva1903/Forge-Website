import forgeLogo from '../assets/logo/forge-no-bg.png';
import dashImg from '../assets/screenshots/dash.jpg';
import habitsImg from '../assets/screenshots/habits.jpg';
import goalsImg from '../assets/screenshots/goals.jpg';
import statsImg from '../assets/screenshots/stats.jpg';
import reportImg from '../assets/screenshots/report.jpg';

export { forgeLogo, dashImg, habitsImg, goalsImg, statsImg, reportImg };

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureTab {
  id: string;
  label: string;
  icon: string;
}

export interface ProductStorySection {
  id: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  screenshot: string;
  highlights: string[];
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

export interface Persona {
  id: string;
  label: string;
  title: string;
  description: string;
  quote: string;
  metrics: { label: string; value: string }[];
  bgImage: string;
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
  { label: 'Product', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
];

export const heroTabs = [
  { id: 'habits', label: 'Daily Habits', icon: 'Flame' },
  { id: 'goals', label: 'Goal Tracking', icon: 'Target' },
  { id: 'stats', label: 'Analytics', icon: 'BarChart2' },
  { id: 'report', label: 'Monthly Heatmap', icon: 'Calendar' },
];

export const solutionFilterTabs = [
  { id: 'habits', label: 'Habits', screenshot: habitsImg },
  { id: 'goals', label: 'Goals', screenshot: goalsImg },
  { id: 'stats', label: 'Statistics', screenshot: statsImg },
  { id: 'report', label: 'Monthly Report', screenshot: reportImg },
  { id: 'dash', label: 'Dashboard', screenshot: dashImg },
];

export const solutionScreens: Record<
  string,
  { title: string; subtitle: string; badge: string; screenshot: string; metrics: { label: string; val: string }[] }
> = {
  habits: {
    title: 'Daily Habits & Routines',
    subtitle: 'Turn intention into consistency with custom routine checklists, streak counters, and weekly completion bars.',
    badge: 'DAILY ROUTINES',
    screenshot: habitsImg,
    metrics: [
      { label: 'Daily Routine', val: '3/3 Completed' },
      { label: 'Current Streak', val: '67 Days' },
      { label: 'Weekly Bar', val: 'Peak Consistency' },
    ],
  },
  goals: {
    title: 'Ambitious Goal Progress',
    subtitle: 'Break down short-term and long-term ambitions into actionable progress bars across Learning, Career, & Health.',
    badge: 'GOALS & TARGETS',
    screenshot: goalsImg,
    metrics: [
      { label: 'Learn MERN', val: '67% Progress' },
      { label: 'Learn Flutter', val: '50% Progress' },
      { label: 'Category Filter', val: 'Learning / Health' },
    ],
  },
  stats: {
    title: 'Statistics & Progress Insights',
    subtitle: 'Track total, active, and completed goal achievements with precision metrics.',
    badge: 'PROGRESS ANALYTICS',
    screenshot: statsImg,
    metrics: [
      { label: 'Total Goals', val: '4 Goals' },
      { label: 'Active Goals', val: '3 Active' },
      { label: 'Completed Goals', val: '1 Trophy' },
    ],
  },
  report: {
    title: 'Monthly Report & Heat-Map',
    subtitle: 'Visualize your consistency over time with calendar heatmaps and month-over-month growth analytics.',
    badge: 'HABIT HEAT-MAP',
    screenshot: reportImg,
    metrics: [
      { label: 'Consistency Score', val: '60%' },
      { label: 'Motto', val: 'Discipline Over Motivation' },
      { label: 'Month View', val: 'Sep 1 - Sep 30' },
    ],
  },
  dash: {
    title: 'Home Dashboard',
    subtitle: 'All your daily routines, active streaks, and goal targets aggregated in one high-contrast interface.',
    badge: 'HOME OVERVIEW',
    screenshot: dashImg,
    metrics: [
      { label: 'Greeting', val: 'Evening, Atharva' },
      { label: 'Consistency', val: '60% (+Discipline)' },
      { label: 'Active Streak', val: '3 Days' },
    ],
  },
};

export const productStories: ProductStorySection[] = [
  {
    id: 'habits',
    tag: 'BUILD ROUTINES',
    title: 'Habits',
    headline: 'Turn intention into consistency.',
    description: 'Build daily morning and evening routine stacks. Check off habits effortlessly, stay motivated with active streak counters, and monitor weekly completion trends.',
    screenshot: habitsImg,
    highlights: ['One-tap habit check-ins', 'Active streak counters (3 to 67+ days)', 'Weekly analytics completion bars', 'Custom habit categories'],
  },
  {
    id: 'goals',
    tag: 'ACHIEVE TARGETS',
    title: 'Goals',
    headline: 'Turn ambitious goals into measurable progress.',
    description: 'Separate short-term micro-targets from long-term life milestones. Track progress percentages, set deadlines, and manage task breakdowns effortlessly.',
    screenshot: goalsImg,
    highlights: ['Short-term vs. Long-term classification', 'Category filters (Health, Career, Learning)', 'Visual percentage progress bars', 'Task milestone checklists'],
  },
  {
    id: 'stats',
    tag: 'UNDERSTAND GROWTH',
    title: 'Statistics',
    headline: "See how far you've come.",
    description: 'Understand your growth velocity. Review total goals created, active pursuits, and completed victories with high-contrast productivity dashboards.',
    screenshot: statsImg,
    highlights: ['Total, active, and completed goal tallies', 'Goal vs. Habit analytics switch', 'Real-time achievement trophies', 'High-contrast dark mode design'],
  },
  {
    id: 'report',
    tag: 'HEAT-MAP ANALYTICS',
    title: 'Reports',
    headline: 'Your progress, at a glance.',
    description: 'Analyze monthly consistency scores and view your 30-day habit heat-map. Track discipline over motivation across weeks and months.',
    screenshot: reportImg,
    highlights: ['Monthly consistency percentage score', '30-day interactive calendar heat-map', 'Month-over-month trend comparison', 'Discipline vs. motivation tracking'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Atharva',
    handle: '@atharva_dev',
    role: 'Founder & Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Forge completely transformed how I manage daily coding routines and learning targets. The habit heatmap and goal progress bars keep me disciplined every single day.',
    rating: 5,
    date: 'Verified User • 2 days ago',
  },
  {
    id: '2',
    name: 'Elena Rostova',
    handle: '@elena_product',
    role: 'Product Director',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    content: 'Replaced 4 different apps (streaks, focus timer, journal, habit tracker) with Forge. The high-contrast dark theme and real screenshots are unmatched.',
    rating: 5,
    date: 'Verified User • 5 days ago',
  },
  {
    id: '3',
    name: 'Marcus Chen',
    handle: '@marcus_fitness',
    role: 'Triathlete & Founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'The 67-day streak tracking and monthly heat-map feature kept me accountable through my marathon prep. It holds me accountable without feeling overwhelming.',
    rating: 5,
    date: 'Verified User • 1 week ago',
  },
  {
    id: '4',
    name: 'Sarah Jenkins',
    handle: '@sarah_writes',
    role: 'Author & Journalist',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    content: 'Finished my book draft 3 weeks ahead of deadline thanks to short-term goal tracking and daily routine check-ins logged in Forge. Highly recommended!',
    rating: 5,
    date: 'Verified User • 2 weeks ago',
  },
  {
    id: '5',
    name: 'David Kim',
    handle: '@davidkim_vc',
    role: 'Venture Partner',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content: 'Forge Teams allows our whole startup team to share wellness goals and weekly consistency challenges. Building team culture around discipline has been amazing.',
    rating: 5,
    date: 'Verified User • 3 weeks ago',
  },
  {
    id: '6',
    name: 'Lisa Patel',
    handle: '@lisa_wellness',
    role: 'Mindfulness Coach',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'The monthly habit heat-map opened my eyes to when I perform best. Forge is the ultimate personal growth companion.',
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
      'Daily habit tracking & check-ins',
      'Up to 3 active goal progress bars',
      '7-day routine history',
      'Basic weekly analytics',
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
      'Unlimited habit streaks & daily routines',
      'Unlimited short-term & long-term goals',
      'Monthly calendar habit heat-maps',
      'Consistency percentage & statistics reporting',
      'Unlimited history & data export',
      'Dark & High-contrast theme customization',
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
      'Shared group habit challenges & goals',
      'Team consistency & streak reporting',
      'Priority 24/7 dedicated support',
      'Custom admin controls & privacy modes',
    ],
    cta: 'Contact Sales',
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'How does Forge help build long-term habits?',
    answer: 'Forge combines daily routine check-ins, active streak counters, and monthly habit heat-maps to create visual momentum, making daily consistency effortless and rewarding.',
  },
  {
    question: 'What is the Habit Heat-Map feature?',
    answer: 'The Habit Heat-Map displays a monthly calendar grid highlighting completed days in vibrant cyan/orange colors, giving you an instant visual overview of your monthly discipline score.',
  },
  {
    question: 'How do short-term and long-term goals work in Forge?',
    answer: 'In Forge, you can categorize goals by timeline (Short-term vs. Long-term) and topic (Learning, Career, Health). Each goal tracks progress percentage and task milestones.',
  },
  {
    question: 'Can I track habits and goals offline?',
    answer: 'Yes! Forge works 100% offline. All your habit check-ins, goal updates, and notes save locally on your device and auto-sync seamlessly once you reconnect.',
  },
  {
    question: 'Is my personal productivity and goal data private?',
    answer: 'Absolutely. We use end-to-end encryption for all stored data. We never sell, monetize, or share your personal goals or productivity metrics with third parties.',
  },
  {
    question: 'Can I upgrade, downgrade, or cancel my subscription anytime?',
    answer: 'Yes, you can change your subscription tier or cancel anytime with one click in your account settings. No lock-in contracts or hidden fees.',
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
    title: 'How Visual Heatmaps & Streak Counters Outsmart Willpower Fatigue',
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

export const personas: Persona[] = [
  {
    id: 'achiever',
    label: 'Daily Achiever',
    title: 'Master Consistency with Science-Backed Habit Loops',
    description: 'Designed for ambitious professionals who want to eliminate friction and execute daily goals without burnout.',
    quote: '"Forge helped me maintain a 67-day workout and learning streak while building my app."',
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
    description: 'Track daily steps, hydration streaks, protein intake, and rest days with clean visual feedback.',
    quote: '"Combining my workout logs with daily habit streaks kept me accountable through my marathon prep."',
    metrics: [
      { label: 'Active Streak', value: '67 Days' },
      { label: 'Weekly Target', value: '7 / 7 Days' },
    ],
    bgImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'executive',
    label: 'Executive & Leader',
    title: 'High-Impact Focus Windows & Goal Targets',
    description: 'Track short-term milestones and long-term targets, automate recurring review rituals, and evaluate progress.',
    quote: '"The short-term and long-term goal tracking freed up hours of mental clutter every week."',
    metrics: [
      { label: 'Goals Active', value: '3 Goals' },
      { label: 'Target Completion', value: '67%' },
    ],
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'nomad',
    label: 'Mindful Creator',
    title: 'Maintain Healthy Boundaries & Consistency Anywhere',
    description: 'Track habit heat-maps, discipline scores, and progress metrics wherever work and life take you.',
    quote: '"Traveling across time zones usually breaks routines. Forge heatmaps kept my momentum alive."',
    metrics: [
      { label: 'Heatmap Tracking', value: '30-Day Calendar' },
      { label: 'Discipline Score', value: '60% (Improving)' },
    ],
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'BUILD YOUR ROUTINE',
    description: 'Create daily habit check-ins and structured morning or evening routine stacks.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Atomic Habit Check-ins', 'Daily Routine Stacks', 'Streak Counters'],
  },
  {
    step: '02',
    title: 'TRACK YOUR PROGRESS',
    description: 'Monitor daily streak counts, short-term targets, and long-term ambition progress bars.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    highlights: ['Progress Percentages', 'Short-term & Long-term Targets', 'Category Tags'],
  },
  {
    step: '03',
    title: 'IMPROVE CONSISTENTLY',
    description: 'Analyze monthly discipline scores, calendar heat-maps, and weekly analytics.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    highlights: ['Consistency Score', 'Monthly Heat-Map', 'Progress Insights'],
  },
];
