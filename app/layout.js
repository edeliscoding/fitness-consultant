import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative bg-white">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
