import { createEvent, createStore } from 'effector';

export const updateLanguage = createEvent<string>();
export const resetLanguage = createEvent();

export const $language = createStore<string>('en')
  .on(updateLanguage, (_, state) => state)
  .reset(resetLanguage);

updateLanguage.watch((lang) => {
  document.documentElement.lang = lang;
});
