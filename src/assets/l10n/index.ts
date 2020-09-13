import EnglishMessages from "./messages/en_US.json";
// import SpanishMessages from "./messages/es_MX.json";

export const AppLanguage: Language = {
  messages: EnglishMessages,
  locale: "en-US",
};

type Language = {
  messages: any;
  locale: string;
};
