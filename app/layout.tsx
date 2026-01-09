import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

export const metadata = {
  title: "LegalAssist — AI Legal Platform",
  description: "AI-powered legal intake, case workflow, and document tools for modern law firms."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
