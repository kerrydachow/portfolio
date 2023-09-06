import { useState } from "react";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
