import { IconType } from "react-icons/lib";

export type Activity = {
  id: number;
  userID: number;
  title: string;
  description: string;
  participants: number;
  participantsMax: number;
  state: "stopped" | "running";
  date: number;
};

export type LinkType = {
  icon: IconType;
  key: string;
  label: string;
  path: string;
};

export type MessageType = {
  id: number;
  userID: number;
  message: string;
  date: number;
};

export type UserType = {
  id: number;
  name: string;
  avatar: string;
  email: string;
  password: string;
  isConnect: boolean;
};
