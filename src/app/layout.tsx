import "@/styles/globals.css";

import { headers } from "next/headers";
import { GeistSans } from "geist/font";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata = {
  title: "devlinks",
  description: "created by wxwymg",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable}`}>
        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
