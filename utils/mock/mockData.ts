import "dayjs/locale/fr";

import { Activity, LinkType, MessageType, UserType } from "../types";
import { MdLocalActivity, MdSpaceDashboard } from "react-icons/md";

import dayjs from "dayjs";

const mockLinks: LinkType[] = [
  { icon: MdSpaceDashboard, key: "dashboard", label: "Dashboard", path: "/" },
  {
    icon: MdLocalActivity,
    key: "activity",
    label: "Activités",
    path: "/activity",
  },
];

const mockMessage: MessageType[] = [
  {
    id: 0,
    userID: 0,
    message: "Hello world",
    date: dayjs().unix(),
  },
  {
    id: 1,
    userID: 1,
    message: "Hello world",
    date: 1670887526,
  },
  {
    id: 2,
    userID: 2,
    message: "Hello world",
    date: dayjs().unix(),
  },
  {
    id: 3,
    userID: 1,
    message: "Hello world",
    date: dayjs().unix(),
  },
];

const mockActivity: Activity[] = [
  {
    id: 0,
    userID: 0,
    title: "Laser Game",
    description: "Laser Game description",
    participants: 4,
    participantsMax: 10,
    state: "stopped",
    date: dayjs().unix(),
  },
  {
    id: 1,
    userID: 1,
    title: "Lancé de haches",
    description: "Lancé de haches description",
    participants: 4,
    participantsMax: 10,
    state: "running",
    date: 1670887526,
  },
  {
    id: 2,
    userID: 2,
    title: "Karting",
    description: "Karting description",
    participants: 10,
    participantsMax: 10,
    state: "running",
    date: dayjs().unix(),
  },
  {
    id: 3,
    userID: 1,
    title: "Football",
    description: "Football description",
    participants: 8,
    participantsMax: 20,
    state: "stopped",
    date: dayjs().unix(),
  },
  {
    id: 4,
    userID: 2,
    title: "Paintball",
    description: "Paintball description",
    participants: 10,
    participantsMax: 30,
    state: "running",
    date: dayjs().unix(),
  },
];

const mockUser: UserType[] = [
  {
    id: 0,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/med/men/50.jpg",
    role: "user",
    email: "johndoe@mail.com",
    password: "password",
    isConnect: false,
  },
  {
    id: 1,
    name: "Jane Doe",
    avatar: "https://randomuser.me/api/portraits/med/women/20.jpg",
    role: "user",
    email: "janedoe@mail.com",
    password: "pass",
    isConnect: true,
  },
  {
    id: 2,
    name: "Yves Gérard",
    avatar: "https://randomuser.me/api/portraits/med/men/77.jpg",
    role: "admin",
    email: "yvesgerard@mail.com",
    password: "pass",
    isConnect: true,
  },
];
export { mockLinks, mockActivity, mockMessage, mockUser };
