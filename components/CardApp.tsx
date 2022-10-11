import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group } from '@mantine/core';
import {
    IconCreditCard,
    IconBuildingBank,
    IconRepeat,
    IconReceiptRefund,
    IconReceipt,
    IconReceiptTax,
    IconReport,
    IconCashBanknote,
    IconCoin,
} from '@tabler/icons';
import { mockDataCard } from '../utils/mock/mockData';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colors.white
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
    },

    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: theme.radius.md,
        height: 90,
        backgroundColor: "#f5f5f5",
        transition: 'box-shadow 150ms ease, transform 100ms ease',

        '&:hover': {
            boxShadow: `${theme.shadows.md} !important`,
            transform: 'scale(1.05)',
        },
    },
}));

function CardApp() {
    const { classes, theme } = useStyles();

    const items = mockDataCard.map((item) => (
        <UnstyledButton key={item.title} className={classes.item}>
            <item.icon color={theme.colors[item.color][6]} size={32} />
            <Text size="xs" mt={7}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));

    return (
        <Card radius="md" className={classes.card}>
            <Group position="apart">
                <Text className={classes.title}>Services</Text>
                <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
                    suce
                </Anchor>
            </Group>
            <SimpleGrid cols={3} mt="md">
                {items}
            </SimpleGrid>
        </Card>
    );
}

export default CardApp