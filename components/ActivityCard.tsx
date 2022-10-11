import { Box, Text, Button, Image } from "@mantine/core";

const ActivityCard = () => (
  <Box
    sx={{
      cursor: "pointer",
      borderRadius: "1em",
      overflow: "hidden",
      backgroundColor: "#fff",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      transition: ".5s all",
      "&:hover": {
        filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))",
        transition: ".5s all",
      },
    }}
  >
    <Box sx={{ height: "12.5em", overflow: "hidden" }}>
      <Image
        sx={{ height: "100%", width: "100%" }}
        src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt="Random unsplash image"
      />
    </Box>
    <Box sx={{ paddingLeft: "1em", paddingTop: "1em" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: 45,
            height: 45,
            borderRadius: "50%",
            backgroundColor: "#C4C4C4",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: 15,
              height: 15,
              borderRadius: "50%",
              backgroundColor: "#09BD3C",
              position: "absolute",
              bottom: 0,
              right: 0,
              border: "2px solid #fff",
            }}
          />
        </Box>
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
            Laser Game
          </Text>
          <Text sx={{ fontSize: 18, color: "#03AE00", fontWeight: 400 }}>
            En cours
          </Text>
          <Text sx={{ fontSize: 16, color: "#85888A", fontWeight: 400 }}>
            Aujourd'hui à 17:30
          </Text>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text sx={{ fontSize: 20, color: "#171B1E", fontWeight: 500 }}>
            12/15
          </Text>
          <Button color="lime" radius="xl">
            Participer
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default ActivityCard;
