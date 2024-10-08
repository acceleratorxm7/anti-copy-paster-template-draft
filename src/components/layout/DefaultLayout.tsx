import { ReactNode } from "react";
import { Navbar } from "./Navbar";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
