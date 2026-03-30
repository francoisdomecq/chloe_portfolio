const NBSP = '\u00A0';

/**
 * Applique les corrections typographiques françaises à une chaîne de texte :
 * - Espace insécable avant la ponctuation double (! ? : ; »)
 * - Espace insécable après «
 * - Trois points → ellipse (…)
 * - Double tiret espacé → tiret cadratin ( — )
 */
export function typo(text: string): string {
  return text
    .replace(/\s([!?:;»])/g, `${NBSP}$1`)
    .replace(/([«])\s/g, `$1${NBSP}`)
    .replace(/\.{3}/g, '…')
    .replace(/\s--\s/g, ` — `);
}
