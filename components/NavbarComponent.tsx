import { Badge, Tooltip } from "@nextui-org/react";
import { Navbar, Stack, UnstyledButton, createStyles } from "@mantine/core";
import { mockActivity, mockLinks } from "../utils/mock/mockData";

import { IconType } from "react-icons/lib";
import Link from "next/link";
import { LinkType } from "../utils/types";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.gray[7],
    marginBottom: ".5rem",
    "&:hover": {
      backgroundColor: theme.colors.gray[2],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface NavbarLinkProps {
  link: LinkType;
  active?: boolean;
  onClick?(): void;
}

const NavbarLink = ({ link, active, onClick }: NavbarLinkProps) => {
  const { classes, cx } = useStyles();
  const countActivityRunning = mockActivity.filter(
    (activity) => activity.state === "running"
  ).length;
  const Icon = link.icon as IconType;
  return (
    <Tooltip placement="right" color="primary" rounded content={link.label}>
      <Link href={link.path ? link.path : ""}>
        <UnstyledButton
          onClick={onClick}
          className={cx(classes.link, { [classes.active]: active })}
        >
          {link.key === "activity" ? (
            <Badge
              placement="top-right"
              color="primary"
              disableOutline
              isInvisible={countActivityRunning === 0}
              content={
                countActivityRunning > 99 ? `99+` : `${countActivityRunning}`
              }
              size="xs"
              shape="rectangle"
            >
              <Icon size={20} />
            </Badge>
          ) : (
            <Icon size={23} />
          )}
        </UnstyledButton>
      </Link>
    </Tooltip>
  );
};

const NavbarComponent = () => {
  const [active, setActive] = useState(2);

  const links = mockLinks.map((link, index) => (
    <NavbarLink
      key={index}
      link={link}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar height="100%" width={{ base: 80 }} p="md">
      <Navbar.Section grow>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavbarComponent;
