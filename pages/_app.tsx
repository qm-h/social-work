import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AppShell,Button, UnstyledButton, ThemeIcon, Group, Text} from "@mantine/core"
import NavbarComponent from "../components/NavbarComponent";
import HeaderSearchComponent from "../components/HeaderSearchComponent";


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AppShell
          padding="md"
          navbar={<NavbarComponent/>}
          header={<HeaderSearchComponent links={[
              {
                  "link": "/about",
                  "label": "Features"
              },
              {
                  "link": "/pricing",
                  "label": "Pricing"
              },
              {
                  "link": "/learn",
                  "label": "Learn"
              },
              {
                  "link": "/community",
                  "label": "Community"
              }
          ]}/>}
          styles={(theme) => ({
              main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
      >
        <Component {...pageProps} />
      </AppShell>

  )
}

export default MyApp
