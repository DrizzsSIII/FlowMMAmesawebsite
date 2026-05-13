import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyTrialCTA from "@/components/StickyTrialCTA";

export const metadata: Metadata = {
  title: {
    default:  "Flow MMA Academy | MMA Gym Mesa AZ",
    template: "%s | Flow MMA Academy",
  },
  description:
    "Train MMA, Brazilian Jiu-Jitsu, and Muay Thai in Mesa, AZ. Beginner-friendly classes and elite fighter development. Flow MMA Academy.",
  keywords: [
    "MMA gym Mesa AZ",
    "Jiu Jitsu Mesa",
    "Muay Thai Mesa",
    "MMA classes Mesa Arizona",
    "BJJ Mesa",
    "martial arts Mesa AZ",
    "kids MMA Mesa",
    "Flow MMA Academy",
  ],
  openGraph: {
    title:       "Flow MMA Academy | MMA Gym Mesa AZ",
    description: "Train MMA, BJJ, and Muay Thai in Mesa, AZ. Start your free trial at Flow MMA Academy.",
    url:         "https://www.flowmmaacademy.com",
    siteName:    "Flow MMA Academy",
    locale:      "en_US",
    type:        "website",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.flowmmaacademy.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-flow-black text-flow-cream font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyTrialCTA />
      </body>
    </html>
  );
}
