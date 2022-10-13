import "../styles/globals.css";

import type { AppProps } from "next/app";
import { AppShell } from "@mantine/core";
import { BreakpointProvider } from "react-socks";
import HeaderSearchComponent from "../components/HeaderSearchComponent";
import NavbarComponent from "../components/NavbarComponent";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const path = useRouter().pathname;
  return (
    <BreakpointProvider>
      <AppShell
        padding="md"
        navbar={<NavbarComponent />}
        header={<HeaderSearchComponent links={[]} />}
        hidden={path === "/login"}
        styles={() => ({
          main: { backgroundColor: "#f1f1f1" },
        })}
      >
        <Component {...pageProps} />
      </AppShell>
    </BreakpointProvider>
  );
};

export default MyApp;
