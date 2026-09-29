import { profile } from '../content/profile';

export const navLinks = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/about', label: 'About', icon: 'user' },
  { href: '/projects', label: 'Projects', icon: 'folder' },
  { href: '/resume', label: 'Resume', icon: 'file' },
  { href: '/blog', label: 'Writing', icon: 'book' },
  { href: '/contact', label: 'Contact', icon: 'send' },
];

// Small cross-component event helpers (no global state library needed).
export const openPalette = () => window.dispatchEvent(new Event('palette:open'));

export const toast = (message) =>
  window.dispatchEvent(new CustomEvent('toast', { detail: message }));

export async function copyText(text, message = 'Copied to clipboard') {
  try {
    await navigator.clipboard.writeText(text);
    toast(message);
  } catch (e) {
    toast(text);
  }
}

export const copyEmail = () => copyText(profile.email, 'Email copied. Talk soon!');
