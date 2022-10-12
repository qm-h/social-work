import { Button, Card, Grid, Row, Text } from "@nextui-org/react";

import Analytics from "./svg/analytics";

const InfoCard = () => {
  return (
    <Row justify="center" align="center">
      <Card
        variant="flat"
        css={{
          background:
            "linear-gradient(212.43deg, #09C6F9 19.43%, #045DE9 87.63%)",
        }}
      >
        <Card.Body>
          <Grid.Container>
            <Grid lg={12}>
              <Text color="#fff" h1>
                Le Réseau social interne de votre entreprise
              </Text>
            </Grid>
            <Grid lg={6} alignItems="center">
              <Text
                css={{
                  m: "0",
                }}
                h3
                color="#fff"
              >
                Proposez et participez aux{" "}
                <Text
                  css={{
                    m: "0",
                  }}
                  h3
                  color="#fff"
                >
                  activités avec vos collègues !
                </Text>
              </Text>
            </Grid>
            <Grid lg={6}>
              <Analytics />
            </Grid>
            <Grid lg={12} css={{ ml: "$18" }}>
              <Button
                rounded
                css={{
                  background: "$background",
                  color: "$accents9",
                  fontSize: "$md",
                }}
              >
                Découvrir
              </Button>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default InfoCard;
