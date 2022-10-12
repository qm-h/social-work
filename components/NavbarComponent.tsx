import { Badge, Tooltip } from "@nextui-org/react";
import { Navbar, Stack, UnstyledButton, createStyles } from "@mantine/core";
import { mockActivity, mockLinks } from "../utils/mock/mockData";
import { useEffect, useState } from "react";

import { IconType } from "react-icons/lib";
import Link from "next/link";
import Router from "next/router";

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
  icon: IconType;
  label: string;
  active?: boolean;
  onClick?(): void;
  path?: string;
}

const NavbarLink = ({
  icon: Icon,
  label,
  active,
  onClick,
  path,
}: NavbarLinkProps) => {
  const { classes, cx } = useStyles();
  const countActivity = mockActivity.length;

  return (
    <Tooltip placement="right" color="primary" rounded content={label}>
      <Link href={path ? path : ""}>
        <UnstyledButton
          onClick={onClick}
          className={cx(classes.link, { [classes.active]: active })}
        >
          {label === "Activity" ? (
            <Badge
              placement="top-right"
              color="success"
              disableOutline
              isInvisible={countActivity === 0}
              content={countActivity > 99 ? `99+` : `${countActivity}`}
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
      {...link}
      key={link.label}
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
