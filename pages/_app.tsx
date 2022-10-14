import "../styles/globals.css";

import {
  AppShell,
  Button,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import HeaderSearchComponent from "../components/HeaderSearchComponent";
import NavbarComponent from "../components/NavbarComponent";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

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
