import { Grid, Text, User } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { ActionIcon } from "@mantine/core";
import type { Activity } from "../utils/types";
import { HiDotsVertical } from "react-icons/hi";
import { UserType } from "../utils/types";
import { convertTimeStampToDate } from "../utils/convert";
import { mockUser } from "../utils/mock/mockData";

interface ActivityInfoProps {
  activity: Activity;
}

const ActivityInfo = ({ activity }: ActivityInfoProps) => {
  const [user, setUser] = useState<UserType | undefined>();
  useEffect(() => {
    setUser(mockUser.filter((user) => user.id === activity.userID)[0]);
  }, [activity.userID]);
  return (
    <Grid.Container justify="space-between" alignItems="center">
      <Grid lg={4} justify="flex-start" alignItems="flex-start">
        <User
          size="lg"
          src={user?.avatar}
          name={activity.title}
          bordered
          color="success"
          description={activity.description}
        />
      </Grid>
      <Grid lg={4} justify="flex-end">
        <Grid.Container justify="space-around" alignItems="center">
          <Grid lg={11} justify="center">
            <Text>
              {convertTimeStampToDate(activity.date, "DD MMMM YYYY à HH:mm")}
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

export default ActivityInfo;
