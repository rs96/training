export const shortDate = (date: number) =>
  `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(
    date
  ).getFullYear()}`;

export const formatTime = (seconds: number) => {
  const remainingSeconds = seconds % 60;
  const minutes = Math.floor(seconds / 60);
  return `${minutes > 0 ? minutes : ""}${
    minutes > 0 ? ":" : ""
  }${remainingSeconds}`;
};
