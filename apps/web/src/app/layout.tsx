import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BASE_OPEN_GRAPH, BASE_TWITTER, ROBOTS } from "@/lib/metadata";
import { SITE, SITE_URL } from "@/lib/site";
import { themeColor } from "@/lib/theme-colors";
import { cn } from "@/lib/utils";

const merriweatherHeading = Merriweather({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: [SITE.author],
  creator: SITE.author.name,
  alternates: { canonical: "/" },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    title: SITE.name,
    description: SITE.description,
    url: "/",
  },
  twitter: { ...BASE_TWITTER, title: SITE.name, description: SITE.description },
  robots: ROBOTS,
  formatDetection: { telephone: false, email: false, address: false },
};

// Light only until a theme switcher sets the `.dark` class; add a dark entry alongside it then.
export const viewport: Viewport = {
  themeColor: themeColor("background"),
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={SITE.language}
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        merriweatherHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
