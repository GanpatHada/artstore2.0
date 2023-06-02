import { createContext, useState } from "react";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {

  const[alert,setAlert]=useState({open:false,title:'',message:'',type:''}) ;
   
  const showAlert=(type,title,message)=>setAlert({open:true,message,title,type})
  const closeAlert=()=>setAlert({open:false,message:'',title:'',type:''})
  return (
    <NotificationContext.Provider 
    value={{
        showAlert,
        closeAlert,
        alert
    }}>
      {children}
    </NotificationContext.Provider>
  );
};
export default NotificationProvider;
