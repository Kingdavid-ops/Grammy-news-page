import React, { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const LoadContext = createContext(undefined);
const NumberContext = ({children}) => {
  const [load, setLoad] = useState(6);
  
  return (
    <LoadContext.Provider value={{load, setLoad} }>
      {children}
    </LoadContext.Provider>
  );
};

export default NumberContext;
