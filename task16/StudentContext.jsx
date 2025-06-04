import React, { createContext } from 'react';

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const student = {
    name: "Prakash",
    age: 23,
    email: "prakash@example.com"
  };

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
