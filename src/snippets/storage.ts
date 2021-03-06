import { ID } from "consts";

export const generatorPrefs = {
  get: () => {
    const prefs = localStorage.getItem(ID.generator);
    return prefs === null ? null : JSON.parse(prefs);
  },
  save: (values: object) => {
    localStorage.setItem(ID.generator, JSON.stringify(values));
  },
};

export const localePrefs = {
  get: () => {
    const prefs = localStorage.getItem(ID.locale);
    return prefs === null ? null : prefs;
  },
  save: (locale: string) => {
    localStorage.setItem(ID.locale, locale);
  },
};
