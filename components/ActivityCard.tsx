import {
  Avatar,
  Box,
  Button,
  Card,
  Group,
  Image,
  Indicator,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";

import { Activity } from "../utils/mock/types";
import dayjs from "dayjs";
import { mockActivity } from "../utils/mock/mockData";

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  const { title, participants, participantsMax, date, state, id } = activity;
  const [isCompleted, setIsCompleted] = useState(false);
  const [convertedDate, setConvertedDate] = useState("");
  const [isToday, setIsToday] = useState(false);
  const [parti, setParti] = useState(participants);
  const [hasAdded, setHasAdded] = useState(false);

  const addParticipants = () => {
    if (parti < participantsMax) {
      setParti(parti + 1);
      // setHasAdded(true);
    }
  };

  useEffect(() => {
    setIsCompleted(parti === participantsMax);
  }, [parti, participantsMax]);

  useEffect(() => {
    if (dayjs().isSame(date * 1000, "date")) {
      setIsToday(true);
      setConvertedDate(
        dayjs(date * 1000)
          .locale("fr")
          .format("HH:mm")
      );
    } else {
      setIsToday(false);
      setConvertedDate(
        dayjs(date * 1000)
          .locale("fr")
          .format("DD MMMM à HH:mm")
      );
    }
  }, [date]);

  return (
    <Card shadow="sm" p="lg" radius="lg">
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <Box sx={{ paddingTop: "1rem" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Group position="center" align="center">
            <Indicator position="bottom-center" size={16} withBorder>
              <Avatar
                size="lg"
                radius="xl"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              />
            </Indicator>
            <Text
              sx={{
                marginLeft: "1em",
                fontSize: 20,
                color: "#171B1E",
                fontWeight: 500,
              }}
            >
              Yves
            </Text>
          </Group>
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
