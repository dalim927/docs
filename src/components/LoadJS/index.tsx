/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from "react";

interface Props {
  url: string;
}

export const useExternalScript = (url: string) => {
  let [state, setState] = useState(url ? "loading" : "idle");

  useEffect(() => {
    if (!url) {
      setState("idle");
      return;
    }
    let script = document.querySelector(`script[src="${url}"]`);

    const handleScript = (e) => {
      setState(e.type === "load" ? "ready" : "error");
    };

    if (!script) {
      script = document.createElement("script");
      script.type = "application/javascript";
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
      script.addEventListener("load", handleScript);
      script.addEventListener("error", handleScript);
    }

    script.addEventListener("load", handleScript);
    script.addEventListener("error", handleScript);

    return () => {
      script.removeEventListener("load", handleScript);
      script.removeEventListener("error", handleScript);
    };
  }, [url]);

  return state;
};

export default function LoadJS({ url}: Props) {
  const state = useExternalScript(url);
  return null
}
