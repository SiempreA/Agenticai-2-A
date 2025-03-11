"use client";

import React, {
  ReactNode,
  useContext,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

interface AppContextType {
  userActiveState: boolean;
  setUserActiveState: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userActiveState, setUserActiveState] = useState(true);

  return (
    <AppContext.Provider
      value={{
        userActiveState,
        setUserActiveState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppContextProvider");
  }
  return context;
};
