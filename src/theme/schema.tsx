import { colorPalette, typography } from "./style-guide";

const themes = {
  data: {
    light: {
      id: "T_001",
      name: "Light",
      palette: colorPalette.lightMode,
      colors: {
        body: colorPalette.lightMode.color1,
        text: colorPalette.lightMode.contrast,
        button: {
          text: "#FFFFFF",
          background: "#000000",
        },
        link: {
          text: "teal",
          opacity: 1,
        },
      },
      font: typography.text,
    },
    dark: {
      id: "T_002",
      name: "Dark",
      palette: colorPalette.darkMode,
      colors: {
        body: colorPalette.darkMode.color1,
        text: colorPalette.darkMode.contrast,
        button: {
          text: "#000000",
          background: "#FFFFFF",
        },
        link: {
          text: "teal",
          opacity: 1,
        },
      },
      font: typography.text,
    },
  },
  default: "dark",
};

export default themes;
