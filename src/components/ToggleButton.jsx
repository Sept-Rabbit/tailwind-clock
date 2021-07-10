import React, { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ToggleButton() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={classNames(
        enabled ? "bg-gray-500" : "bg-gray-500",
        "relative inline-flex flex-shrink-0 h-4 w-8 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring- focus:ring-offset-2 focus:ring-cyan-200"
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-4 bg-blue-800" : "translate-x-0 bg-gray-200",
          "pointer-events-none inline-block h-3 w-3 rounded-full  shadow transform ring-0 transition ease-in-out duration-200"
        )}
      />
    </div>
  );
}

export default ToggleButton;
