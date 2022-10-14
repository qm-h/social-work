import { Box, Button, Card, Image, Indicator, Text } from "@mantine/core";
import { useEffect, useState } from "react";

import { Activity } from "../utils/types";
import { User } from "@nextui-org/react";
import dayjs from "dayjs";

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  const { participants, participantsMax } = activity;
  const [isCompleted, setIsCompleted] = useState(false);
  const [convertedDate, setConvertedDate] = useState("");
  const [isToday, setIsToday] = useState(false);
  const [parti, setParti] = useState(participants);
  const [hasAdded, setHasAdded] = useState(false);
  const [state, setState] = useState("running");

  const addParticipants = () => {
    if (parti < activity.places && !hasAdded) {
      setParti(parti + 1);
      setHasAdded(true);
    }
  };

  useEffect(() => {
    setIsCompleted(activity.places_actuel === activity.places);
  }, [parti, participantsMax]);

  useEffect(() => {
    if (dayjs().isSame(activity.date_evenement * 1000, "date")) {
      setIsToday(true);
      setConvertedDate(
        dayjs(activity.date_evenement * 1000)
          .locale("fr")
          .format("HH:mm")
      );
    } else {
      setIsToday(false);
      setConvertedDate(
        dayjs(activity.date_evenement * 1000)
          .locale("fr")
          .format("DD MMMM à HH:mm")
      );
    }
  }, [activity.date_evenement]);

  useEffect(() => {
    let state = "";
    if (dayjs().unix() < activity.date_evenement) {
      state = "running";
    }
    setState(state);
  }, [activity.date_evenement]);

  useEffect(() => {
    setParti(activity.places_actuel);
  }, [activity.places_actuel]);

  return (
    <Card shadow="sm" p="lg" radius="lg">
      <Card.Section>
        <Image
          src={activity.icon_activite}
          height={160}
          alt={activity.description}
        />
      </Card.Section>
      <Box sx={{ paddingTop: "1rem" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <User
            size="lg"
            color="success"
            css={{ zIndex: 0 }}
            bordered
            src={"https://randomuser.me/api/portraits/med/women/28.jpg"}
            name={activity.name}
          />
        </Box>
        <Box
          sx={{
            marginTop: "1em",
            marginBottom: "1em",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            width: "100%",
          }}
        >
          <Box>
            <Text
              sx={{
                fontSize: 20,
                color: "#171B1E",
                fontWeight: 500,
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "10em",
                whiteSpace: "nowrap",
              }}
            >
              {activity.description}
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
            <Text
              sx={{
                fontSize: 16,
                color: "#85888A",
                fontWeight: 400,
                textTransform: "capitalize",
              }}
            >
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
                  {parti} / {activity.places}
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
