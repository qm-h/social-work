import "../styles/globals.css";

import {
  AppShell,
  Button,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";

import type { AppProps } from "next/app";
import HeaderSearchComponent from "../components/HeaderSearchComponent";
import NavbarComponent from "../components/NavbarComponent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppShell
      padding="md"
      navbar={<NavbarComponent />}
      header={<HeaderSearchComponent links={[]} />}
      styles={(theme) => ({
        main: { backgroundColor: "#f1f1f1" },
      })}
    >
      <Component {...pageProps} />
    </AppShell>
  );
}

export default MyApp;
