import Providers from "@/components/Providers/Providers";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";

export const metadata = {
  title: "Mohamad Termanini",
  description: "Portfolio of Mohamad Termanini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
