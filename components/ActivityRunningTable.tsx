import { Button, Card, Grid, Text } from "@nextui-org/react";

import ActivityInfo from "./ActivityInfo";
import { Divider } from "@mantine/core";
import { MdOutlineAdd } from "react-icons/md";
import { mockActivity } from "../utils/mock/mockData";

const ActivityRunningTable = () => (
  <Card
    variant="flat"
    css={{ bg: "$background", overflow: "auto", h: "21.5rem" }}
  >
    <Card.Header>
      <Grid.Container justify="space-between">
        <Grid lg={6} alignItems="center">
          <Text h2>Activités</Text>
        </Grid>
        <Grid lg={6} justify="flex-end" alignItems="center">
          <Button auto rounded size="sm" flat icon={<MdOutlineAdd size={20} />}>
            Créer une activité
          </Button>
        </Grid>
      </Grid.Container>
    </Card.Header>
    <Card.Body>
      {mockActivity.map((activity, id) => (
        <>
          <ActivityInfo key={id} activity={activity} />
          <Divider my="xs" m={0} />
        </>
      ))}
    </Card.Body>
  </Card>
);

export default ActivityRunningTable;
