import { Roboto } from "next/font/google";
import Providers from "@/components/Providers/Providers";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";
import "../assets/sass/loader.scss";

export const metadata = {
  title: "Portfolio | Mohamad Termanini",
  description: "Portfolio of Mohamad Termanini",
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
        <div className="initial-loader">
          <div className="dots-wrapper">
            <span className="dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <p className="waiting">Loading...</p>
          </div>
        </div>
        <Providers>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
