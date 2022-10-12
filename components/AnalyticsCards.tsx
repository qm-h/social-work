import { Card, Col, Grid, Row, Spacer, Text } from "@nextui-org/react";

import ActivityBar from "./svg/activityBar";
import ActivityRunning from "./svg/activityRunning";
import ActivityStopped from "./svg/activityStopped";
import AnalyticsBar from "./svg/analyticsBar";
import { mockActivity } from "../utils/mock/mockData";

const AnalyticsCards = () => {
  const countActivityRunning = mockActivity.filter(
    (activity) => activity.state === "running"
  ).length;
  const countActivityStopped = mockActivity.filter(
    (activity) => activity.state === "stopped"
  ).length;
  return (
    <Grid.Container gap={1} wrap="wrap">
      <Grid lg={6}>
        <Card variant="flat" css={{ bg: "$background" }}>
          <Card.Body>
            <Grid.Container justify="space-around" wrap="wrap" gap={1}>
              <Grid lg={12} alignItems="center">
                <Text h3>Utilisateurs</Text>
              </Grid>
              <Grid alignItems="center" lg={3}>
                <Text h2>68</Text>
              </Grid>
              <Grid lg={3} alignItems="center">
                <AnalyticsBar />
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Grid>
      <Grid lg={6}>
        <Card variant="flat" css={{ bg: "$background" }}>
          <Card.Body>
            <Grid.Container justify="center" wrap="wrap" gap={1}>
              <Grid lg={12} alignItems="center">
                <Text h3>Mes Activités</Text>
              </Grid>
              <Grid lg={11} alignItems="center">
                <ActivityBar />
              </Grid>
              <Grid lg={1} alignItems="center">
                <Text h2>0</Text>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Grid>
      <Grid lg={6}>
        <Card variant="flat" css={{ bg: "$background" }}>
          <Card.Body>
            <Grid.Container justify="center" wrap="wrap" gap={1}>
              <Row justify="center" align="center">
                <Col>
                  <Grid
                    lg={12}
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                  >
                    <Text h2>{countActivityRunning}</Text>
                  </Grid>
                  <Grid lg={12} justify="flex-start" alignItems="center">
                    <Text h4>Activités en cours</Text>
                  </Grid>
                </Col>
                <Col>
                  <ActivityRunning />
                </Col>
              </Row>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Grid>
      <Grid lg={6}>
        <Card variant="flat" css={{ bg: "$background" }}>
          <Card.Body>
            <Grid.Container justify="center" wrap="wrap" gap={1}>
              <Row justify="center" align="center">
                <Col>
                  <Grid
                    lg={12}
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                  >
                    <Text h2>{countActivityStopped}</Text>
                  </Grid>
                  <Grid lg={12} justify="flex-start" alignItems="center">
                    <Text h4>Activités terminés</Text>
                  </Grid>
                </Col>
                <Col>
                  <ActivityStopped />
                </Col>
              </Row>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default AnalyticsCards;
