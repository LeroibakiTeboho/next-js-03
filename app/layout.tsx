import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='min-h-screen flex flex-col'>
        <header className='bg-[lightblue] p-[1rem] '>
          <h1>Header</h1>
        </header>

        <main className="flex flex-col flex-1 px-5">
          {children}
        </main>

        <footer className='bg-[ghostwhite] p-[1rem]' >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
