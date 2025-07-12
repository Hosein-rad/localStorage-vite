import { useEffect, useState } from "react";

export function useLocalStorage(key, value) {
  const [state, setState] = useState(() => {
    const oldVal = window.localStorage.getItem(key);
    if (oldVal == null) {
      if (typeof value == "function") {
        return value();
      } else {
        return value;
      }
    } else {
      // if (typeof value == "function") {
      //   return value();
      // } else {
      return JSON.parse(oldVal);
      // }
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
