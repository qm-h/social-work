import "dayjs/locale/fr";

import dayjs from "dayjs";

export const convertDateToTimeStamp = (date: string) => dayjs(date).unix();

export const convertTimeStampToDate = (timestamp: number, format: string) =>
  dayjs(timestamp * 1000)
    .locale("fr")
    .format(format);

export const convertForInput = (date: string) =>
  new Date(date.split("/").reverse().join("-")).toISOString().split("T")[0];
