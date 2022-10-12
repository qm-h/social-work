import { Autocomplete, Center, Header, createStyles } from "@mantine/core";

import { IconSearch } from "@tabler/icons";
import dayjs from "dayjs";
import { mockActivity } from "../utils/mock/mockData";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    marginTop: theme.spacing.xs,
    width: "30%",
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

const HeaderSearchComponent = ({ links }: HeaderSearchProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const activities = () => {
    const activities: string[] = [];
    mockActivity.forEach((activity) => {
      if (
        activity.title &&
        !activities.includes(activity.title) &&
        activity.state === "running"
      ) {
        activities.push(
          `${activity.title} - ${dayjs(activity.date * 1000).format(
            "DD/MM/YYYY"
          )}`
        );
      }
    });
    return activities;
  };

  return (
    <Header height={56} className={classes.header}>
      <Center>
        <Autocomplete
          className={classes.search}
          placeholder="Search"
          radius="md"
          variant="filled"
          icon={<IconSearch size={16} stroke={1.5} />}
          data={activities()}
        />
      </Center>
    </Header>
  );
};

export default HeaderSearchComponent;
