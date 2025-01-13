import "./globals.css";

export const metadata = {
  title: "Energize",
  description: "Showcasing energy charts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
