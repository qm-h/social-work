import ActivityRunningTable from "../components/ActivityRunningTable";
import AnalyticsCards from "../components/AnalyticsCards";
import { Grid } from "@nextui-org/react";
import InfoCard from "../components/InfoCard";
import MessagesTable from "../components/MessagesTable";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Grid.Container>
      <Grid.Container gap={2} justify="space-between">
        <Grid lg={6}>
          <InfoCard />
        </Grid>
        <Grid lg={6}>
          <AnalyticsCards />
        </Grid>
      </Grid.Container>
      <Grid lg={12}>
        <Grid.Container gap={2} justify="space-between">
          <Grid lg={6} justify="center">
            <ActivityRunningTable />
          </Grid>
          <Grid lg={6} justify="center">
            <MessagesTable />
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

export default Home;
