import { Poppins } from "next/font/google";
import "./globals.css";

// configure Poppins (you can pick weights + subsets)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose what you need
});

export const metadata = {
  title: "My Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* 👇 global font applied */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

