import { Margarine } from "next/font/google";
import "./globals.css";

const margarine = Margarine({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Benson",
  description: "A cat house",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${margarine.className} bg-primary`}>{children}</body>
    </html>
  );
}
