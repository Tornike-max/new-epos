import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import SidebarContext from "./context/SidebarContext.tsx";
import DarkModeContext from "./context/DarkModeContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-center" />
      <DarkModeContext>
        <SidebarContext>
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </SidebarContext>
      </DarkModeContext>
    </QueryClientProvider>
  </React.StrictMode>
);
