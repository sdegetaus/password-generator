import { createContext } from "react";
import EnglishMessages from "./messages/en-US.json";
import SpanishMessages from "./messages/es-MX.json";

export const L10N = {
  en: {
    locale: "en",
    messages: EnglishMessages,
    displayName: "English",
  },
  es: {
    locale: "es",
    messages: SpanishMessages,
    displayName: "Español",
  },
};

export const L10NContext = createContext<any>({});
export { default as L10NProvider } from "./Provider";
