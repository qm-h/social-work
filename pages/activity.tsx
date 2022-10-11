import { Grid } from "@mantine/core";
import ActivityCard from "../components/ActivityCard";

const Activity = () => (
  <Grid gutter={30}>
    <Grid.Col span={3}>
      <ActivityCard />
    </Grid.Col>
    <Grid.Col span={3}>
      <ActivityCard />
    </Grid.Col>
    <Grid.Col span={3}>
      <ActivityCard />
    </Grid.Col>
    <Grid.Col span={3}>
      <ActivityCard />
    </Grid.Col>
  </Grid>
);

export default Activity;
