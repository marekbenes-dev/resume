import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: { default: "Marek Beneš — Resume", template: "%s — Marek Beneš" },
  description: "Resume for Marek Beneš: experience, projects, skills, education, contact.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Marek Beneš — Resume",
    description: "Experience, projects, skills, education, and contact.",
    url: "https://marek-resume-next.vercel.app/",
    siteName: "Marek Beneš — Resume",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Marek Beneš" }],
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marek Beneš — Resume",
    description: "Experience, projects, skills, education, and contact.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const KEY = 'marek-resume-theme';
                const saved = localStorage.getItem(KEY);
                const dark = saved === 'dark';
                document.documentElement.classList.toggle('dark', dark);
              } catch {}
            `,
          }}
        />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

