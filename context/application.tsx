import React, { useContext, useRef, useState } from 'react';

type ApplicationContextType = {
  isScroll: boolean;
  setIsScroll: (isScroll: boolean) => void;
};

export const ApplicationContext =
  React.createContext<ApplicationContextType | null>(null);

export const ApplicationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isScroll, setIsScroll] = useState(false);
  return (
    <ApplicationContext.Provider value={{ isScroll, setIsScroll }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useAppContext = () => useContext(ApplicationContext);
