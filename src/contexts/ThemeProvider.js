import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  createContext,
  useContext,
} from "react";
import { useLocalStorage } from "../hooks/useLocaleStorage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode, removeMode] = useLocalStorage("theme-mode", "dark");
  const htmlRef = useRef(document.querySelector("html"));

  useEffect(() => {
    mode === "dark"
      ? htmlRef.current.classList.add("dark")
      : htmlRef.current.classList.remove("dark");
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, removeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDark = () => useContext(ThemeContext);
