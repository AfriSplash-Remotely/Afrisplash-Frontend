import React from "react";

export function useLocalStorage(name: string) {
  const [index, setIndex] = React.useState<S | null | number>(null);

  //saving index
  React.useEffect(() => {
    if (index === null) {
      setIndex(0);
    } else {
      localStorage.setItem(name, JSON.stringify(index));
    }
  }, [index, name]);

  //retrieving index
  React.useEffect(() => {
    const savedIndex = JSON.parse(localStorage.getItem(name));
    if (savedIndex === null) {
      setIndex(0);
    } else {
      setIndex(savedIndex);
    }
  }, [name]);

  return { index, setIndex };
}
