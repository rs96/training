import { SessionType, TrackSession } from "../../types";
import styles from "./chart.module.css";
import * as d3 from "d3";
import { WINTER } from "../../data/data";
import { useEffect } from "react";

const plotMargins = { x: 35, y: 20 };

// const getSessionMaxPerformance = (session: TrackSession) =>{
//   return session.sets.map((set) => set.times)}

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
    console.log({ width, height });
    const dateMax = d3.max(sessions, (d: TrackSession) => d.date) as number;
    const dateMin = d3.min(sessions, (d: TrackSession) => d.date) as number;
    const performanceMax = 180;
    // d3.max(
    //   performances,
    //   (d: TrackSession) => d. as number
    // ) as number;
    const performanceMin = 0;
    // d3.min(
    //   performances,
    //   (d: TrackSession) => d.performance as number
    // ) as number;

    const performanceRange = performanceMax - performanceMin;
    console.log({ dateMin, dateMax });

    // define our scaling functions
    const xScale = d3
      .scaleLinear()
      .domain([dateMin, dateMax])
      .range([plotMargins.x, width - plotMargins.x]);
    const yScale = d3
      .scaleLinear()
      .domain([performanceMin, performanceMax])
      .range([height - plotMargins.y, 0]);

    const graph = d3.select("#chart");
    graph.selectAll("*").remove();
    graph.attr("width", width).attr("height", height);
    // const ticksForXAxis = 12;
    // const xAxis = d3.axisBottom(xScale).ticks(ticksForXAxis);
    // .tickFormat((d, i) =>
    //   i % 2
    //     ? isForSeason
    //       ? formatShortMonth(d as number)
    //       : formatYear(d as number)
    //     : ""
    // );
    // const yAxis = d3.axisLeft(yScale).ticks(5);
    // .tickFormat((d) =>
    // );

    // add axes
    // graph
    //   .append("g")
    //   .attr("transform", `translate(0, ${height - plotMargins.y})`)
    //   .call(xAxis);

    // graph
    //   .append("g")
    //   .attr("transform", `translate(${plotMargins.x},0)`)
    //   .call(yAxis);

    sessions.forEach((s) => {
      console.log(s.date);
      console.log(xScale(s.date));
    });

    graph
      .selectAll(".performance")
      .data(sessions)
      .enter()
      .append("circle")
      .attr("r", 1.5)
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yScale(d.sets[0].times[0] as number))
      .attr("class", "performance")
      .attr("fill", "white");
    // .exit()
    // .remove();
  };
  return (
    <div className={styles.container} id="chart-container">
      <svg className={styles.chart} id="chart"></svg>
    </div>
  );
};

export default Chart;
