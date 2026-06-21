import "./globals.css";

export const metadata = {
  title: "Smart Brain Solutions | Coming Soon",
  description: "Smart ideas. Thoughtful technology. Better solutions — coming soon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
