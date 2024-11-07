import { SessionType, TrackSession } from "../../types";
import styles from "./chart.module.css";
import * as d3 from "d3";
import { WINTER } from "../../data/data";
import { useEffect } from "react";
import { shortDate } from "../../formatters";
import { Set } from "../../types";

const plotMargins = { x: 35, y: 30 };

type DataPoint = {
  date: number;
  performance: number;
  distance: number;
};

const getDistancesFromSession = (sessions: TrackSession[]) => {
  const allDistances = sessions
    .reduce((acc: Set[], cur) => [...acc, ...cur.sets], [])
    .flatMap((s) => s.distances);
  return { max: Math.max(...allDistances), min: Math.min(...allDistances) };
};

const getDatePerformancesArray = (sessions: TrackSession[]) =>
  sessions.reduce((acc: DataPoint[], cur) => {
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

    const datePerformanceArray = getDatePerformancesArray(sessions);

    // Find data ranges
    const performanceMin = 0; // zero is good for plotting for now
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

    graph
      .append("g")
      .attr("transform", `translate(${plotMargins.x},0)`)
      .call(yAxis);

    // graph.append("div").attr("class", "tooltip");

    const tooltip = d3.select(`.${styles.tooltip}`);

    // Plot data points
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
      .on("mouseenter", function (event, d) {
        const [mx, my] = d3.pointer(event);
        const tooltipText = `
        <strong>Distance</strong>: ${d.distance} 
        <br> 
        <strong>Performance</strong>: ${d.performance}`;

        return tooltip
          .style("visibility", "visible")
          .style("top", `${my - height}px`)
          .style("left", `${mx}px`)
          .html(tooltipText);
      })
      .on("mousemove", function (event, d) {
        const [mx, my] = d3.pointer(event);
        return tooltip
          .style("top", `${my - height}px`)
          .style("left", `${mx}px`);
      })
      .on("mouseout", () => tooltip.style("visibility", "hidden").html())
      .exit()
      .remove();
  };
  return (
    <div className={styles.container} id="chart-container">
      <svg className={styles.chart} id="chart"></svg>
      <div className={styles.tooltip}>Test</div>
    </div>
  );
};

export default Chart;
