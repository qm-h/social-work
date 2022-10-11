import {Card, Grid, Text} from "@mantine/core"

const Dashboard = () => {
  return (
      <Grid grow>
          <Grid.Col span={4}>
              <Card radius={"md"}>
                  <Text>Dashboard</Text>
              </Card>
          </Grid.Col>
          <Grid.Col span={4}>
          <Card radius={"md"}>
              <Text>Dashboard</Text>
          </Card>
            </Grid.Col>
      </Grid>
  )
}

export default Dashboard