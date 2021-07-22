import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import heroEN from "./locales/en/hero.json";
import aboutEN from "./locales/en/about.json";
import experienceEN from "./locales/en/experience.json";
import projectsEN from "./locales/en/projects.json";
import educationEN from "./locales/en/education.json";
import contactEN from "./locales/en/contact.json";
import menuEN from "./locales/en/menu.json";

import heroFR from "./locales/fr/hero.json";
import aboutFR from "./locales/fr/about.json";
import experienceFR from "./locales/fr/experience.json";
import projectsFR from "./locales/fr/projects.json";
import educationFR from "./locales/fr/education.json";
import contactFR from "./locales/fr/contact.json";
import menuFR from "./locales/fr/menu.json";

const resources = {
  en: {
    hero: heroEN,
    about: aboutEN,
    experience: experienceEN,
    projects: projectsEN,
    education: educationEN,
    contact: contactEN,
    menu: menuEN,
  },
  fr: {
    hero: heroFR,
    about: aboutFR,
    experience: experienceFR,
    projects: projectsFR,
    education: educationFR,
    contact: contactFR,
    menu: menuFR,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
