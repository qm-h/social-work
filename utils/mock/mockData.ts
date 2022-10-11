import {
    IconBuildingBank, IconCashBanknote, IconCoin,
    IconCreditCard,
    IconDeviceDesktopAnalytics,
    IconGauge,
    IconHome2, IconReceipt,
    IconReceiptRefund, IconReceiptTax, IconRepeat, IconReport
} from "@tabler/icons";

const mockLinks = [
    { icon: IconHome2, label: 'Home', path: '/' },
    { icon: IconGauge, label: 'Dashboard', path: '/dashboard' },
];

const mockDataCard = [
    { title: 'Credit cards', icon: IconCreditCard, color: 'violet' },
    { title: 'Banks nearby', icon: IconBuildingBank, color: 'indigo' },
    { title: 'Transfers', icon: IconRepeat, color: 'blue' },
    { title: 'Refunds', icon: IconReceiptRefund, color: 'green' },
    { title: 'Receipts', icon: IconReceipt, color: 'teal' },
    { title: 'Taxes', icon: IconReceiptTax, color: 'cyan' },
    { title: 'Reports', icon: IconReport, color: 'pink' },
    { title: 'Payments', icon: IconCoin, color: 'red' },
    { title: 'Cashback', icon: IconCashBanknote, color: 'orange' },
];

export {
    mockLinks,
    mockDataCard
}