import "dayjs/locale/fr";

import {
  IconBuildingBank,
  IconCashBanknote,
  IconCoin,
  IconCreditCard,
  IconGauge,
  IconHome2,
  IconMoodHappy,
  IconReceipt,
  IconReceiptRefund,
  IconReceiptTax,
  IconRepeat,
  IconReport,
} from "@tabler/icons";

import { Activity } from "./types";
import dayjs from "dayjs";

const mockLinks = [
  { icon: IconHome2, label: "Home", path: "/" },
  { icon: IconGauge, label: "Dashboard", path: "/dashboard" },
  { icon: IconMoodHappy, label: "Activity", path: "/activity" },
];

const mockDataCard = [
  { title: "Credit cards", icon: IconCreditCard, color: "violet" },
  { title: "Banks nearby", icon: IconBuildingBank, color: "indigo" },
  { title: "Transfers", icon: IconRepeat, color: "blue" },
  { title: "Refunds", icon: IconReceiptRefund, color: "green" },
  { title: "Receipts", icon: IconReceipt, color: "teal" },
  { title: "Taxes", icon: IconReceiptTax, color: "cyan" },
  { title: "Reports", icon: IconReport, color: "pink" },
  { title: "Payments", icon: IconCoin, color: "red" },
  { title: "Cashback", icon: IconCashBanknote, color: "orange" },
];

const mockActivity: Activity[] = [
  {
    id: 0,
    title: "Laser Game",
    participants: 4,
    participantsMax: 10,
    state: "stopped",
    date: dayjs().unix(),
  },
  {
    id: 1,
    title: "Lancé de haches",
    participants: 4,
    participantsMax: 10,
    state: "running",
    date: 1670887526,
  },
  {
    id: 2,
    title: "Karting",
    participants: 10,
    participantsMax: 10,
    state: "running",
    date: dayjs().unix(),
  },
];

export { mockLinks, mockDataCard, mockActivity };
