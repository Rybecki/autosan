import { useEffect, useState } from "react";

export function useHashRoute(defaultPath = "") {
  const read = () => {
    const hash = window.location.hash.replace(/^#\/?/, "");
    return hash || defaultPath;
  };

  const [path, setPath] = useState(read);

  useEffect(() => {
    const onChange = () => setPath(read());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, [defaultPath]);

  const navigate = (to: string) => {
    window.location.hash = to ? `#/${to}` : "#/";
  };

  return { path, navigate };
}
