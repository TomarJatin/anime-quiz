import React, { createContext, useState, useEffect } from "react";

// Define the context
const DataContext = createContext();

// Data Provider component
const DataProvider = ({ children }) => {
  const [selectedQuizSection, setSelectedQuizSection] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectLvl, setSelectLvl] = useState(0);


  return (
    <DataContext.Provider
      value={{
        selectedQuizSection,
        selectedCategory,
        selectLvl,
        setSelectedQuizSection,
        setSelectedCategory,
        setSelectLvl,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };