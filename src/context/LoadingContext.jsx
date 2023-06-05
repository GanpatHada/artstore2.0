import { useState } from "react";
import { createContext } from "react";

export const LoadingContext = createContext();


export const LoadingProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <LoadingContext.Provider
      value={{
        open,
        handleClose,
        handleOpen,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
export default LoadingProvider;
