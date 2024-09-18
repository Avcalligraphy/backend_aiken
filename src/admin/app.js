// @ts-ignore
import favicon from "./extensions/favicon.ico";
// @ts-ignore
import logo from "./extensions/logo.png";

const config = {
  auth: {
    logo,
  },
  head: {
    favicon: favicon,
  },

  menu: {
    logo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Workplace",

      "Auth.form.welcome.title": "Welcome to Aiken Dashboard",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  theme: {
    colors: {
      primary100: "#EDD9F2",
      primary200: "#DAAAE4",
      primary500: "#9412B2",
      primary600: "#700C86",
      primary700: "#4A0959",
      buttonPrimary100: "#EDD9F2",
      buttonPrimary200: "#DAAAE4",
      buttonPrimary500: "#9412B2",
      buttonPrimary600: "#700C86",
      buttonPrimary700: "#4A0959",
      danger700: "#b72b1a",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
  document.title = "Aiken Admin";
};

export default {
  config,
  bootstrap,
};
