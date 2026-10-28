import "./globals.css";

export const metadata = {
  title: "15th MEU Apps",
  description: "Next.js applications for the 15th Marine Expeditionary Unit",
  robots: {
    index: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body /*className={inter.className} <--- Blocked since tailwind is not in use*/
      >
        {children}
      </body>
    </html>
  );
}
