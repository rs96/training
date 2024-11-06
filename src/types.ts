export type Type = "track" | "gym" | "run" | "hill" | "grass" | "bike";

export type Recovery = number[] | "walkback" | "jogback" | "n/a";

export type Effort = {
  distance: number;
  time: number;
};

export enum SessionType {
  Track = "Track",
  LongRun = "LongRun",
  Bike = "Bike",
  Gym = "Gym",
  Hill = "Hill",
  Grass = "Grass",
}

export type Set = {
  repetitions: number;
  distances: number[];
  recovery: Recovery;
  times: number[];
};

// export type SessionPart = Set | DurationSet | number

export type DurationSet = {
  repetitions: number;
  recovery: Recovery;
  times: number[];
};

export type TrackSession = {
  type: SessionType.Track;
  date: number;
  sets: Set[];
  recoveries: number[];
  comments: {
    athlete: string;
    coach: string;
  };
};

export type GrassSession = {
  type: SessionType.Grass;
  date: number;
  sets: DurationSet[];
  comments: {
    athlete: string;
    coach: string;
  };
};

export type HillSession = {
  type: SessionType.Hill;
  date: number;
  sets: Set[];
  recoveries: number[];
  comments: {
    athlete: string;
    coach: string;
  };
};

export type BikeSession = {
  type: SessionType.Bike;
  date: number;
  average_wattage: number;
  duration: number;
  distance: number;
  average_rpm: number;
  comments: {
    athlete: string;
    coach: string;
  };
};

export type RunSession = {
  type: SessionType.LongRun;
  date: number;
  duration: number;
  distance: number;
  comments: {
    athlete: string;
    coach: string;
  };
};

export type Session =
  | TrackSession
  | BikeSession
  | RunSession
  | HillSession
  | GrassSession;
