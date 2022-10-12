import {
  Box,
  Button,
  Card,
  Group,
  Image,
  Indicator,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";

import { Activity } from "../utils/types";
import { User } from "@nextui-org/react";
import { convertTimeStampToDate } from "../utils/convert";
import dayjs from "dayjs";
import { mockUser } from "../utils/mock/mockData";

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  const { title, participants, participantsMax, date, state, id, userID } =
    activity;
  const [isCompleted, setIsCompleted] = useState(false);
  const [convertedDate, setConvertedDate] = useState("");
  const [isToday, setIsToday] = useState(false);
  const [parti, setParti] = useState(participants);
  const [hasAdded, setHasAdded] = useState(false);
  const user = mockUser.filter((user) => user.id === userID)[0];
  const addParticipants = () => {
    if (parti < participantsMax) {
      setParti(parti + 1);
      setHasAdded(true);
    }
  };

  useEffect(() => {
    setIsCompleted(parti === participantsMax);
  }, [parti, participantsMax]);

  useEffect(() => {
    if (dayjs().isSame(date * 1000, "date")) {
      setIsToday(true);
      setConvertedDate(convertTimeStampToDate(date, "HH:mm"));
    } else {
      setIsToday(false);
      setConvertedDate(convertTimeStampToDate(date, "DD MMMM à HH:mm"));
    }
  }, [date]);

  return (
    <Card p="lg" radius="lg">
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <Box sx={{ paddingTop: "1rem" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <User
            size="lg"
            color={user.isConnect ? "success" : "default"}
            bordered
            src={user.avatar}
            name={user.name}
          />
        </Box>
        <Box
          sx={{
            marginTop: "1em",
            marginBottom: "1em",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
          }}
        >
          <Box>
            <Text sx={{ fontSize: 20, color: "#171B1E", fontWeight: 500 }}>
              {title}
            </Text>
            <Text
              sx={{
                fontSize: 18,
                color: state === "running" ? "#40c057" : "#f95352",
                fontWeight: 400,
              }}
            >
              {state === "running" ? "En cours" : "Terminé"}
            </Text>
            <Text sx={{ fontSize: 16, color: "#85888A", fontWeight: 400 }}>
              {isToday ? `Aujourd'hui à ${convertedDate}` : convertedDate}
            </Text>
          </Box>
          {state === "running" && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Indicator
                position="top-end"
                radius="sm"
                color={isCompleted ? "red" : "green"}
                label={isCompleted ? "Complet" : "Disponible"}
                size={16}
              >
                <Text
                  sx={{
                    fontSize: 20,
                    color: "#171B1E",
                    fontWeight: 500,
                    margin: ".1rem",
                  }}
                >
                  {parti} / {participantsMax}
                </Text>
              </Indicator>
              <Button
                disabled={isCompleted || hasAdded}
                variant="light"
                color="blue"
                radius="lg"
                onClick={() => addParticipants()}
              >
                Participer
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
};
export default ActivityCard;
