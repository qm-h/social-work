import { IconType } from "react-icons/lib";

export type Activity = {
  id: number;
  userID: number;
  title: string;
  description: string;
  participants: number;
  participantsMax: number;
  places: number;
  places_actuel: number;
  date_creation: number;
  date_evenement: number;
  icon_activite: string;
  name: string;
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
  role: "admin" | "user";
  email: string;
  password: string;
  isConnect: boolean;
};
