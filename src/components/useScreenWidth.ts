import { useEffect, useState } from "react";

export const useScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState(
    document.documentElement.clientWidth
  );

  let timerId: number;

  const updateScreenWidth = () => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      setScreenWidth(document.documentElement.clientWidth);
    }, 300);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return screenWidth;
};
