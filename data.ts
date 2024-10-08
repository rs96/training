import { Session } from "./types";

const WINTER: Session[] = [
  {
    date: 1727816157330,
    sets: [
      {
        repetitions: 5,
        distances: [600],
        recovery: [90],
        times: [102.1, 106.6, 108.9, 114.5, 112],
      },
      {
        repetitions: 6,
        distances: [100],
        recovery: "walkback",
        times: [14.2, 14, 13.2, 13.4, 13.1, 13.2],
      },
    ],
    type: "track",
    comments: {
      coach: "",
      athlete:
        "The 600s started a bit too fast and slowed after the first effort. I did manage to keep them honest by the end at least. The wind was blowing down the home straight so the 100s felt fast and easy.",
    },
  },
  {
    date: 1727823600000,
    type: "bike",
    average_rpm: 91,
    average_wattage: 228,
    distance: 13910,
    duration: 1502,
    comments: {
      coach: "",
      athlete:
        "Hard work to get going and really sweaty by the end. Worked well for the time allowed that evening.",
    },
  },
  {
    date: 1727910000000,
    sets: [
      { repetitions: 8, distances: [270], recovery: "jogback", times: [] },
    ],
    type: "hill",
    comments: {
      coach: "",
      athlete: "",
    },
  },
  {
    type: "long run",
    date: 1728235191248,
    distance: 9980,
    duration: 2763,
    comments: {
      coach: "",
      athlete: "Easy one to start the SLRs off right!",
    },
  },
  {
    date: 1728415614487,
    sets: [
      {
        repetitions: 3,
        distances: [300],
        recovery: [60],
        times: [49.2, 47.4, 46.8, 48.4, 48.2],
      },
      {
        repetitions: 3,
        distances: [300],
        recovery: [60],
        times: [47.8, 48.3, 48.7, 49.5, 49.7],
      },
      {
        repetitions: 1,
        distances: [1000],
        recovery: "n/a",
        times: [201.2],
      },
    ],
    type: "track",
    comments: {
      coach: "",
      athlete:
        "The 600s started a bit too fast and slowed after the first effort. I did manage to keep them honest by the end at least. The wind was blowing down the home straight so the 100s felt fast and easy.",
    },
  },
];

export default { WINTER };
