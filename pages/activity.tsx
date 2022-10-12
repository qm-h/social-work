import ActivityCard from "../components/ActivityCard";
import { Grid } from "@mantine/core";
import { mockActivity } from "../utils/mock/mockData";

const Activity = () => (
  <Grid gutter={30}>
    {mockActivity.map((activity, id) => (
      <Grid.Col key={id} span={3}>
        <ActivityCard activity={activity} />
      </Grid.Col>
    ))}
  </Grid>
);

export default Activity;
