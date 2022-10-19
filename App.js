import * as React from "react";
import { AuthProvider } from "./app/navigation/AuthProvider";
import RootNavigation from "./app/navigation/navigation";

export default function App() {
  return (
    <>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </>
  );
}
