import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
     <AuthProvider>
          <ChatProvider>
               <React.StrictMode>
                    <App />
               </React.StrictMode>
          </ChatProvider>
     </AuthProvider>
);
