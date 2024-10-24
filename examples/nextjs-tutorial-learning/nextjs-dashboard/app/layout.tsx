// Styles
import "@/app/ui/global.css";

// Fonts
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      // Add the font by className
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

