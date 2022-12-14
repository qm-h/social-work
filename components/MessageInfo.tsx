import { Avatar, Badge, Col, Grid, Row, Text, User } from "@nextui-org/react";

import { ActionIcon } from "@mantine/core";
import { HiDotsVertical } from "react-icons/hi";
import type { MessageType } from "../utils/types";
import { convertTimeStampToDate } from "../utils/convert";
import { mockUser } from "../utils/mock/mockData";

interface MessageInfoProps {
  message: MessageType;
}

const MessageInfo = ({ message }: MessageInfoProps) => {
  const user = mockUser.filter((user) => user.id === message.userID)[0];
  return (
    <Grid.Container justify="space-between" alignItems="center">
      <Grid lg={4} justify="flex-start" alignItems="flex-start">
        <User
          size="lg"
          src={user.avatar}
          name={user.name}
          bordered
          color={user.isConnect ? "success" : "default"}
          description={message.message}
        />
      </Grid>
      <Grid lg={4} justify="flex-end">
        <Grid.Container justify="space-around" alignItems="center">
          <Grid lg={11} justify="center">
            <Text>
              {convertTimeStampToDate(message.date, "DD MMMM YYYY à HH:mm")}
            </Text>
          </Grid>
          <Grid lg={1} justify="flex-end">
            <ActionIcon color="blue">
              <HiDotsVertical size={20} />
            </ActionIcon>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

export default MessageInfo;
