import "./globals.css";
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: 'Zhou Killian',
  description: 'Zhou Killian - Cybsersecurity French Engineer - Pentester - Cybersecurity Risk Consultant - Software Developper',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={"overflow-x-hidden"} lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
