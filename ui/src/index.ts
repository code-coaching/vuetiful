import * as components from "./components";

function install(app: any) {
  for (const key in components) {
    // @ts-expect-error
    app.component(key, components[key]);
  }
}

import "./assets/main.css";
import "./styles/tailwind.css";

import "./themes/theme-vuetiful.css";
// import "./themes/theme-modern.css";
// import "./themes/theme-rocket.css";
// import "./themes/theme-sahara.css";
// import "./themes/theme-seafoam.css";
// import "./themes/theme-seasonal.css";
// import "./themes/theme-test.css";
// import "./themes/theme-vintage.css";

export default { install };

export * from "./components";
export * from "./constants";
export * from "./utils";

// This type alias is to identify CSS classes within component props, which enables Tailwind IntelliSense
export type CssClasses = string;
