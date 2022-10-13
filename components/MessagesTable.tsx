import { Button, Card, Grid, Text } from "@nextui-org/react";

import { Divider } from "@mantine/core";
import { MdOutlineAdd } from "react-icons/md";
import MessageInfo from "./MessageInfo";
import { mockMessage } from "../utils/mock/mockData";

const MessagesTable = () => (
  <Card
    variant="flat"
    css={{ bg: "$background", overflow: "auto", h: "21.5rem" }}
  >
    <Card.Header>
      <Grid.Container justify="space-between">
        <Grid lg={6} alignItems="center">
          <Text h2>Messages</Text>
        </Grid>
        <Grid lg={6} justify="flex-end" alignItems="center">
          <Button auto rounded size="sm" flat icon={<MdOutlineAdd size={20} />}>
            Nouveau message
          </Button>
        </Grid>
      </Grid.Container>
    </Card.Header>
    <Card.Body>
      {mockMessage.map((message, id) => (
        <>
          <MessageInfo key={id} message={message} />
          <Divider my="xs" m={0} />
        </>
      ))}
    </Card.Body>
  </Card>
);

export default MessagesTable;
