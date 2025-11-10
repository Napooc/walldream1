import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to an element by ID
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (default: 80)
 */
export function scrollToSection(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

/**
 * Detect which country domain the user is on
 * @returns 'france' for walldream.fr, 'suisse' for walldream.ch, or null for others
 */
export function getCountryFromDomain(): 'france' | 'suisse' | null {
  if (typeof window === 'undefined') return null;
  
  const hostname = window.location.hostname;
  
  // Check for French domain
  if (hostname.includes('walldream.fr') || hostname.includes('.fr')) {
    return 'france';
  }
  
  // Check for Swiss domain
  if (hostname.includes('walldream.ch') || hostname.includes('.ch')) {
    return 'suisse';
  }
  
  // For development/preview environments, default to showing both
  return null;
}