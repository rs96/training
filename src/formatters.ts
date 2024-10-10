export const shortDate = (date: number) =>
  `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(
    date
  ).getFullYear()}`;
