import Providers from "@/components/Providers/Providers";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";
import "../assets/sass/loader.scss";

export const metadata = {
  title: "Mohamad Termanini",
  description: "Portfolio of Mohamad Termanini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="initial-loader">
          <div className="dots-wrapper">
            <span class="dots">
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
