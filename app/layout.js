import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
