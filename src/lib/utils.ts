import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | number): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
}

export function calculateFitmentScore(score: number): { 
  label: string; 
  color: string;
} {
  if (score >= 85) {
    return { label: "Excellent", color: "bg-emerald-500" };
  } else if (score >= 70) {
    return { label: "Good", color: "bg-green-500" };
  } else if (score >= 50) {
    return { label: "Fair", color: "bg-yellow-500" };
  } else {
    return { label: "Poor", color: "bg-red-500" };
  }
}

export function getInitials(name: string): string {
  if (!name) return "TS";
  
  const parts = name.split(" ");
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}