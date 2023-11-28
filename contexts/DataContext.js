import React, { createContext, useState, useEffect } from "react";

// Define the context
const DataContext = createContext();

// Data Provider component
const DataProvider = ({ children }) => {
  const [selectedQuizSection, setSelectedQuizSection] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectLvl, setSelectLvl] = useState(0);
  const [resultQuizQuestions, setResultQuizQuestions] = useState([]);
  const [resultScore, setResultScore] = useState(0);
  const [resultQuizAnswers, setResultQuizAnswers] = useState([]);


  return (
    <DataContext.Provider
      value={{
        selectedQuizSection,
        selectedCategory,
        selectLvl,
        resultQuizAnswers,
        resultQuizQuestions,
        resultScore,
        setSelectedQuizSection,
        setSelectedCategory,
        setSelectLvl,
        setResultQuizAnswers,
        setResultQuizQuestions,
        setResultScore
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };