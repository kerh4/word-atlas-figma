// Device-scoped source of truth until accounts exist; migrate these words before replacing it.
export const savedWordsStorageKey = 'word-atlas-saved'

export function readSavedWords(knownWords: ReadonlySet<string>): string[] {
  try {
    const raw = window.localStorage.getItem(savedWordsStorageKey)
    if (!raw) return []
    const stored: unknown = JSON.parse(raw)
    if (!Array.isArray(stored)) return []
    return [...new Set(stored.filter((word): word is string => typeof word === 'string' && knownWords.has(word)))]
  } catch {
    return []
  }
}

export function writeSavedWords(words: readonly string[]): void {
  try {
    window.localStorage.setItem(savedWordsStorageKey, JSON.stringify(words))
  } catch {
    // The UI remains usable when storage is unavailable (for example, in a restricted browser).
  }
}
