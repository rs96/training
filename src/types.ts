export type Type = "track" | "gym" | "run" | "hill" | "grass" | "bike";

export type Recovery = number[] | "walkback" | "jogback" | "n/a";

export type Effort = {
  distance: number;
  time: number;
};

export type Set = {
  repetitions: number;
  distances: number[];
  recovery: Recovery;
  times: number[];
};

export type Session =
  | {
      type: Type;
      date: number;
      sets: Set[];
      comments: {
        athlete: string;
        coach: string;
      };
    }
  | {
      type: "bike";
      date: number;
      average_wattage: number;
      duration: number;
      distance: number;
      average_rpm: number;
      comments: {
        athlete: string;
        coach: string;
      };
    }
  | {
      type: "long run";
      date: number;
      duration: number;
      distance: number;
      comments: {
        athlete: string;
        coach: string;
      };
    };
