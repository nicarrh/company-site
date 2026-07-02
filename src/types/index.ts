import type { LucideIcon } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Industry {
  icon: LucideIcon;
  name: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface Technology {
  name: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormState {
  success?: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}
