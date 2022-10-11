import { useState } from 'react';
import { Navbar, Tooltip, UnstyledButton, createStyles, Stack } from '@mantine/core';
import {
    TablerIcon,
} from '@tabler/icons';
import Link from "next/link";
import { mockLinks } from '../utils/mock/mockData';

const useStyles = createStyles((theme) => ({
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colors.gray[7],
        marginBottom: ".5rem",
        '&:hover': {
            backgroundColor: theme.colors.gray[2],
        },
    },

    active: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

interface NavbarLinkProps {
    icon: TablerIcon;
    label: string;
    active?: boolean;
    onClick?(): void;
    path?: string
}

function NavbarLink({ icon: Icon, label, active, onClick, path }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position="right" transitionDuration={0}>
            <Link href={path ? path : ""}>
                <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                    <Icon stroke={2} />
                </UnstyledButton>
            </Link>
        </Tooltip>
    );
}

function NavbarComponent() {
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
            <Navbar.Section grow mt={50}>
                <Stack justify="center" spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
}

export default NavbarComponent