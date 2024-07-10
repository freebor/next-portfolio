"use client";

import "./globals.css";
import { DarkModeProvider } from './context/DarkModeContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-background"}>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
