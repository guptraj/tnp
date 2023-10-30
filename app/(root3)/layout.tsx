import "../globals.css";
import type { Metadata } from "next";

import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata: Metadata = {
  title: "student.io",
  description: "student.io: A streamlined web app catering to students, teaching staff, and the training/placement cell. Tailored for seamless communication and efficient collaboration in educational settings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
