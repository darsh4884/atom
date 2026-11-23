import { createRoot } from "react-dom/client";

import Button from "./components/button";

/**
 * This is the starting point of this application.
 *
 * The main function loads the application and renders the components to the root div.
 */
function main() {
  const container = document.getElementById("root");
  if (!container) return;

  const root = createRoot(container as Element);

  function handleClick() {
    alert("Clicked!");
  }

  root.render(
    <div>
      <Button title={"My Button"} label={"Hello World"} onClick={handleClick} />
    </div>,
  );
}

main();
