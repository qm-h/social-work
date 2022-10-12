export type Activity = {
  id: number;
  title: string;
  participants: number;
  participantsMax: number;
  state: "stopped" | "running";
  date: number;
};
