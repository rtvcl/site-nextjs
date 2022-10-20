import React, { useContext, useRef, useState } from 'react';

export const ApplicationContext = React.createContext({});

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
