import { de, type Dictionary } from './de';
import { en } from './en';

export type Lang = 'de' | 'en';

export const dictionaries: Record<Lang, Dictionary> = { de, en };

/** Pfad der Startseite pro Sprache. */
export const homePath: Record<Lang, string> = { de: '/', en: '/en/' };

export type { Dictionary };
