import * as components from './components';

function install(app: any) {
  for (const key in components) {
    // @ts-expect-error
    app.component(key, components[key]);
  }
}

import './assets/main.css';
import './styles/tailwind.css';

export default { install };

export * from './components';
export * from './utils';
export * from './directives';
export * from './services';

// This type alias is to identify CSS classes within component props, which enables Tailwind IntelliSense
export type CssClasses = string;
