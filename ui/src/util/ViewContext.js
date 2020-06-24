import React, { useState } from 'react';

export const ViewContext = React.createContext(undefined);

export function ViewContextProvider({ children }) {
  const [activeView, setActiveView] = useState(undefined);

  return <ViewContext.Provider value={{ activeView, setActiveView }}>{children}</ViewContext.Provider>;
}
