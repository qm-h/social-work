import "dayjs/locale/fr";

import { Box, Button, Image, Modal, Text } from "@mantine/core";
import { useRef, useState } from "react";

import ActivityCard from "../components/ActivityCard";
import { AiOutlinePlus } from "react-icons/ai";
import { Calendar } from "@mantine/dates";
import { Dropzone } from "@mantine/dropzone";
import { Input } from "@nextui-org/react";
import { MdOutlineUploadFile } from "react-icons/md";
import dayjs from "dayjs";

interface ActivityProps {
  data: [];
}
const Activity = ({ data }: ActivityProps) => {
  const [modal, setModal] = useState(false);
  const [activityName, setActivityName] = useState("");
  const [number, setNumber] = useState<string>("0");
  const [daySelected, setDaySelected] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [hour, setHour] = useState("");
  const [image, setImage] = useState<File | undefined>(undefined);
  const [base64, setBase64] = useState<string | ArrayBuffer | null>("");
  const openRef = useRef<() => void>(null);

  const uploadToClient = (file: File[]) => {
    setImage(file[0]);
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      setBase64(reader.result);
    };
    reader.onerror = (error) => {
      console.error("Error: ", error);
    };
  };

  const uploadToServer = async () => {
    try {
      const formData = new FormData();
      formData.append("id_demandeur", "6");
      formData.append(
        "date_creation",
        dayjs(daySelected)
          .hour(parseInt(hour.substr(0, 2)))
          .minute(parseInt(hour.substr(3, 2)))
          .second(0)
          .unix()
          .toString()
      );
      formData.append(
        "date_evenement",
        dayjs(daySelected)
          .hour(parseInt(hour.substr(0, 2)))
          .minute(parseInt(hour.substr(3, 2)))
          .second(0)
          .unix()
          .toString()
      );
      formData.append("places_actuel", "0");
      formData.append("places", number);
      formData.append("id_type_activite", "4");
      formData.append("description", activityName);
      formData.append("nom", activityName);
      if (base64) formData.append("icon_activite", base64.toString());
      const sendData = await fetch(
        "http://188.165.238.34:8080/api-social-work/server/addActivity.php",
        {
          method: "POST",
          body: formData,
        }
      );
      setModal(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1em",
        }}
      >
        <Button
          leftIcon={<AiOutlinePlus />}
          radius="xl"
          onClick={() => setModal(true)}
        >
          Ajouter une activité
        </Button>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridColumnGap: "1em",
          gridRowGap: "1em",
          "@media (max-width: 1450px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
          "@media (max-width: 960px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          "@media (max-width: 720px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        {data.map((activity, id) => (
          <ActivityCard key={id} activity={activity} />
        ))}
      </Box>
      <Modal
        opened={modal}
        onClose={() => setModal(false)}
        title="Proposer une activité !"
      >
        <Box sx={{ marginTop: "2em" }}>
          <Input
            labelPlaceholder="Nom de l'activité"
            value={activityName}
            onChange={(e) => {
              setActivityName(e.target.value);
            }}
            css={{ width: "100%" }}
          />
          <Box sx={{ marginTop: "2em" }}>
            <Input
              labelPlaceholder="Nombre de place"
              value={number}
              type="number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              css={{ width: "100%" }}
            />
          </Box>
          <Text sx={{ marginTop: "1em" }}>Date</Text>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                width: "100%",
                height: "4em",
                display: "flex",
                alignItems: "center",
                borderRadius: "1em",
                padding: "1em",
                border: "1px solid #000",
                cursor: "pointer",
                marginTop: "0.5em",
              }}
              onClick={() => setCalendarOpen(!calendarOpen)}
            >
              <Text sx={{ textTransform: "capitalize" }}>
                {dayjs(daySelected).locale("fr").format("dddd DD MMMM YYYY")}
              </Text>
            </Box>
            {calendarOpen && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  background: "#fff",
                  width: "100%",
                  borderRadius: "1em",
                  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.20)",
                  zIndex: 30,
                }}
              >
                <Calendar
                  value={daySelected}
                  onChange={(e: Date) => {
                    setDaySelected(e);
                    setCalendarOpen(false);
                  }}
                  locale="fr"
                />
              </Box>
            )}
          </Box>
          <Box>
            <Input
              css={{ width: "100%", marginTop: "1em" }}
              label="Heure"
              type="time"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
            />
          </Box>
          <Box sx={{ marginTop: "1em" }}>
            <Dropzone openRef={openRef} onDrop={uploadToClient}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <MdOutlineUploadFile size={40} />
                <Text>Insérer une image</Text>
              </Box>
            </Dropzone>
            {image !== undefined && (
              <Box
                sx={{
                  marginTop: "1em",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: "60%" }}
                  src={URL.createObjectURL(image)}
                />
              </Box>
            )}
          </Box>
          <Box sx={{ marginTop: "1em" }}>
            <Button sx={{ width: "100%" }} onClick={uploadToServer}>
              Ajouter
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "http://188.165.238.34:8080/api-social-work/social_serv/getActivites.php",
    { method: "POST" }
  );
  const data = await res.json();

  return { props: { data } };
}

export default Activity;
