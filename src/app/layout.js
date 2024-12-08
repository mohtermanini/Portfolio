import { Roboto } from "next/font/google";
import Providers from "@/components/Providers/Providers";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";
import { APP_META_DATA } from "@/config/appMetaData";
import "../assets/sass/loader.scss";

export const metadata = {
  title: APP_META_DATA.title,
  description: APP_META_DATA.description,
  openGraph: {
    siteName: APP_META_DATA.title,
    title: APP_META_DATA.title,
    description: APP_META_DATA.description,
    type: "website",
    images: [
      {
        url: "https://mohtermanini.github.io/portfolio/assets/images/OG.png",
        width: 1200,
        height: 630,
        alt: "Primary Image",
      },
    ],
  },
};

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        {/* <div className="initial-loader">
          <div className="dots-wrapper">
            <span className="dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <p className="waiting">Loading...</p>
          </div>
        </div> */}
        <Providers>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
