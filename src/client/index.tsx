import ReactDOM from "react-dom";
import { ComponentType } from "react";
import App from "@/App";

const root = document.getElementById("root");

const render = (Component: ComponentType<any>) => {
  ReactDOM.render(<Component />, root);
};

if (SSR) {
  ReactDOM.hydrate(<App />, root);
} else {
  render(App);
}

if ((module as any).hot) {
  (module as any).hot.accept(["@/App.tsx"], () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const NextApp = require("@/App").default;
    render(NextApp);
  });
}
