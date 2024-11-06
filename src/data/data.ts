import { Session, SessionType } from "../types";

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
    recoveries: [240],
    type: SessionType.Track,
    comments: {
      coach: "",
      athlete:
        "The 600s started a bit too fast and slowed after the first effort. I did manage to keep them honest by the end at least. The wind was blowing down the home straight so the 100s felt fast and easy.",
    },
  },
  {
    date: 1727823600000,
    type: SessionType.Bike,
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
      {
        repetitions: 7,
        distances: [270],
        recovery: "jogback",
        times: [57.2, 55.3, 57.4, 56.9, 54.3, 53.8, 53.7],
      },
    ],
    recoveries: [],
    type: SessionType.Hill,
    comments: {
      coach: "",
      athlete:
        "First time trying the longer upslope hill in Hawkesworth Wood. Good surface and slightly undulating incline, but not steep enough to build much lactic. Hill elevation change: 78 -> 89",
    },
  },
  {
    type: SessionType.LongRun,
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
    recoveries: [240, 240],
    type: SessionType.Track,
    comments: {
      coach: "",
      athlete:
        "The 600s started a bit too fast and slowed after the first effort. I did manage to keep them honest by the end at least. The wind was blowing down the home straight so the 100s felt fast and easy.",
    },
  },
  {
    date: 1728514800000,
    sets: [
      {
        repetitions: 10,
        distances: [100],
        recovery: [45],
        times: [13.1, 13.3, 13.5, 13.4, 13.4, 13.5, 13.6, 14.0, 13.4, 13.6],
      },
      {
        repetitions: 10,
        distances: [100],
        recovery: [45],
        times: [13.3, 13.3, 13.7, 13.8, 14.0, 14.3, 14.0, 13.5, 13.8, 13.4],
      },
    ],
    recoveries: [300],
    type: SessionType.Track,
    comments: {
      coach: "",
      athlete:
        "First few reps felt easy. Middle couple felt mentally tough, as lots more to go. Final few hurt a little, not a lot.",
    },
  },
  {
    date: 1728946800000,
    sets: [
      {
        repetitions: 8,
        distances: [200],
        recovery: [60],
        times: [28.8, 28.3, 28.5, 29.2, 30.2, 30.4, 30.5, 32.1],
      },
      {
        repetitions: 1,
        distances: [1000],
        recovery: "n/a",
        times: [194.5],
      },
    ],
    recoveries: [240],
    type: SessionType.Track,
    comments: {
      coach: "",
      athlete: "This is ",
    },
  },
  {
    date: 1729119600000,
    sets: [
      {
        repetitions: 1,
        distances: [600, 500, 500, 400, 400, 400],
        recovery: "jogback",
        times: [98.8, 82.0, 83.6, 64.8, 67.3, 63.7],
      },
      {
        repetitions: 3,
        distances: [100],
        recovery: "walkback",
        times: [12.7, 12.4, 12.5],
      },
    ],
    recoveries: [240],
    type: SessionType.Track,
    comments: {
      athlete:
        "Harder than it seemed, the jog recoveries were around 3 minutes",
      coach: "",
    },
  },
  {
    date: 1729292400000,
    sets: [
      {
        repetitions: 2,
        times: [420, 300, 180],
        recovery: [90],
      },
    ],
    type: SessionType.Grass,
    comments: {
      coach: "",
      athlete: "",
    },
  },
  {
    date: 1729465200000,
    sets: [
      {
        repetitions: 6,
        distances: [300],
        times: [45.7, 47.6, 47.2, 48.7, 47.3, 47.7],
        recovery: [60],
      },
      {
        repetitions: 3,
        distances: [100],
        times: [12.7, 12.7, 12.4],
        recovery: [180],
      },
    ],
    recoveries: [180],
    type: SessionType.Track,
    comments: {
      coach: "The altitude (in Madrid) will lend itself well to do 6-8 300s",
      athlete:
        "Tired from the plane journey and a 5am start. The first rep was great, then it got hard. Great track and lovely evening.",
    },
  },
  {
    date: 1729983600000,
    sets: [
      {
        repetitions: 5,
        distances: [340],
        times: [67.8, 65.3, 75.8, 79.3, 77.6],
        recovery: [180],
      },
    ],
    recoveries: [],
    type: SessionType.Hill,
    comments: {
      coach: "",
      athlete:
        "Much steeper hill this time. Killed me quickly in 3 reps. Almost walking at the end of the last efforts, so probably take it slower next time. Total elevation change: 42 -> 81",
    },
  },
  {
    date: 1730160000000,
    sets: [
      {
        repetitions: 5,
        distances: [600],
        times: [102.3, 100.8, 105.1, 108.1, 107.7],
        recovery: [90],
      },
      {
        repetitions: 4,
        distances: [100],
        times: [13.5, 13.1, 13.2, 12.7],
        recovery: "walkback",
      },
    ],
    recoveries: [240],
    type: SessionType.Track,
    comments: {
      coach: "Repetition is good. Good to do the session from last month.",
      athlete:
        "Good start, nice to make the 600s really hurt by the end, but not completely dead on my feet so finished alright. Mis-counted on my 100s and only did 4 - but pleased with the pace of them.",
    },
  },
  {
    date: 1730505600000,
    sets: [
      {
        repetitions: 3,
        times: [300],
        recovery: [90],
      },
      {
        repetitions: 3,
        times: [180],
        recovery: [90],
      },
    ],
    type: SessionType.Grass,
    comments: { athlete: "", coach: "" },
  },
  {
    date: 1730764800000,
    sets: [
      {
        repetitions: 4,
        distances: [200],
        times: [27.78, 29.5, 27.83, 27.91],
        recovery: "jogback",
      },
      {
        repetitions: 4,
        distances: [200],
        times: [25.15, 28.3, 28.08, 28.17],
        recovery: "jogback",
      },
      {
        repetitions: 4,
        distances: [200],
        times: [25.17, 27.32, 28.49, 28.21],
        recovery: "jogback",
      },
    ],
    recoveries: [300, 300],
    type: SessionType.Track,
    comments: { athlete: "", coach: "" },
  },
];

export { WINTER };
