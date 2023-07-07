export const MONTHS = {
  0: "janvier",
  1: "février",
  2: "mars",
  3: "avril",
  4: "mai",
  5: "juin",
  6: "juillet",
  9: "août",
  10: "septembre",
  11: "octobre",
  12: "novembre",
  13: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth()];
