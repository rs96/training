import { SessionType, TrackSession } from "../../types";
import styles from "./chart.module.css";
import * as d3 from "d3";
import { WINTER } from "../../data/data";
import { useEffect } from "react";
import { shortDate } from "../../formatters";
import { Set } from "../../types";

const plotMargins = { x: 35, y: 30 };

// const getSessionMaxPerformance = (session: TrackSession) =>{
//   return session.sets.map((set) => set.times)}

type DataPoint = {
  date: number;
  performance: number;
  distance: number;
};

const getDistancesFromSession = (sessions: TrackSession[]) => {
  const allSets = sessions.reduce(
    (acc: Set[], cur) => [...acc, ...cur.sets],
    []
  );
  // const distances = sessions.flatMap((s) => s.set)
  const t = allSets.flatMap((s) => s.distances);
  return { max: Math.max(...t), min: Math.min(...t) };
};

const getDatePerformancesArray = (sessions: TrackSession[]) => {
  return sessions.reduce((acc: DataPoint[], cur) => {
    const allReps = cur.sets.reduce((acc: DataPoint[], set) => {
      let toAdd: DataPoint[] = [];
      for (let i = 0; i < set.repetitions; i++) {
        toAdd.push({
          date: cur.date,
          performance: set.times[i],
          distance: set.distances[(i % set.distances.length) / set.repetitions],
        });
      }
      return [...acc, ...toAdd];
    }, []);
    return [...allReps, ...acc];
  }, []);
};

const Chart = () => {
  useEffect(() => {
    if (WINTER.length) {
      drawGraph(WINTER.filter((session) => session.type === SessionType.Track));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  const drawGraph = (sessions: TrackSession[]) => {
    // @ts-ignore
    const { width, height } = d3
      .select(`#chart`)
      .node()
      // @ts-ignore
      .getBoundingClientRect();
    const dateMax = d3.max(sessions, (d: TrackSession) => d.date) as number;
    const dateMin = d3.min(sessions, (d: TrackSession) => d.date) as number;
    const distanceRange = getDistancesFromSession(sessions);
    // d3.max(
    //   performances,
    //   (d: TrackSession) => d. as number
    // ) as number;

    const datePerformanceArray = getDatePerformancesArray(sessions);

    // Find data ranges
    const performanceMin = 0;
    // d3.min(
    //   datePerformanceArray,
    //   (d: DataPoint) => d.performance
    // )!;
    const performanceMax = d3.max(
      datePerformanceArray,
      (d: DataPoint) => d.performance
    )!;

    // define our scaling functions
    const xScale = d3
      .scaleLinear()
      .domain([dateMin, dateMax])
      .range([plotMargins.x, width - plotMargins.x]);
    const yScalePerformance = d3
      .scaleLinear()
      .domain([performanceMin, performanceMax])
      .range([height - plotMargins.y, plotMargins.y]);
    // const yScaleDistance = d3
    //   .scaleLinear()
    //   .domain([distanceRange.min, distanceRange.max])
    //   .range([height - plotMargins.y, 0]);
    const radiusScaleDistance = d3
      .scaleLinear()
      .domain([distanceRange.min, distanceRange.max])
      .range([1.5, 6]);

    const graph = d3.select("#chart");
    graph.selectAll("*").remove();
    graph.attr("width", width).attr("height", height);
    const ticksForXAxis = 12;
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(ticksForXAxis)
      .tickFormat((d, i) => (i % 2 ? shortDate(d as number) : ""));
    const yAxis = d3.axisLeft(yScalePerformance).ticks(5);
    // const yAxisRight = d3.axisLeft(yScaleDistance).ticks(5);

    // add axes
    graph
      .append("g")
      .attr("transform", `translate(0, ${height - plotMargins.y})`)
      .call(xAxis);

    graph
      .append("text")
      .attr(
        "transform",
        `translate(${plotMargins.x / 2},${height / 2}) rotate(-90)`
      )
      .attr("fill", "white")
      .text("Time");
    // graph
    //   .append("text")
    //   .attr(
    //     "transform",
    //     `translate(${width - plotMargins.x / 2},${height / 2}) rotate(-90)`
    //   )
    //   .attr("fill", "white")
    //   .text("Distance");

    graph
      .append("g")
      .attr("transform", `translate(${plotMargins.x},0)`)
      .call(yAxis);
    // graph
    //   .append("g")
    //   .attr("transform", `translate(${width - plotMargins.x},0)`)
    //   .call(yAxisRight);

    graph
      .append("g")
      .selectAll(".performance")
      .data(datePerformanceArray)
      .enter()
      .append("circle")
      .attr("r", (d) => radiusScaleDistance(d.distance))
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yScalePerformance(d.performance))
      .attr("class", "performance")
      .attr("fill", "white")
      .exit()
      .remove();
  };
  return (
    <div className={styles.container} id="chart-container">
      <svg className={styles.chart} id="chart"></svg>
    </div>
  );
};

export default Chart;
