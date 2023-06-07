import { useState } from "react";
import { createContext } from "react";

export const LoadingContext = createContext();


export const LoadingProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const startLoading = () => {
    setOpen(true);
  };
  const stopLoading = () => {
    setOpen(false);
  };

  return (
    <LoadingContext.Provider
      value={{
        open,
        startLoading,
        stopLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
export default LoadingProvider;
