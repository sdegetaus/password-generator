import { ID } from "consts";

/**
 * Save form settings / prefs
 * @param values
 */
export function savePrefs(values: object) {
  localStorage.setItem(ID.prefs, JSON.stringify(values));
}

/**
 * Get previous form preferences. If none exist, returns null.
 */
export function getPrefs() {
  const prefs = localStorage.getItem(ID.prefs);
  return prefs === null ? null : JSON.parse(prefs);
}
