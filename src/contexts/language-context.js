import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("KA");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const renderLanguage = (ka, eng) => {
    if (language === "KA") {
      return ka;
    }
    if (language === "ENG") {
      return eng;
    }
  };

  const renderFontFamily = () => {
    if (language === "KA") {
      return "UpperCaseGeo";
    }

    return '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, renderLanguage, renderFontFamily }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
