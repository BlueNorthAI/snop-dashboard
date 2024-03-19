import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/modules/data";
import "highcharts/modules/exporting";
import "highcharts/modules/offline-exporting";

import "../kendo/map/MyChart.css"; // Import your CSS file with the added styles

export default function DemoMap() {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json",
        );
        const data = await response.json();

        // Prevent logarithmic errors in color calculation
        data.forEach((item) => {
          item.value = item.value < 1 ? 1 : item.value;
        });

        // Initialize the chart options
        const chartOptions = {
          chart: {
            type: "map",
            map: "custom/world",
          },
          title: {
            text: "Zoom in on country by double click",
          },
          mapNavigation: {
            enabled: true,
            enableDoubleClickZoomTo: true,
          },
          colorAxis: {
            min: 1,
            max: 1000,
            type: "logarithmic",
          },
          series: [
            {
              data: data,
              joinBy: ["iso-a3", "code3"],
              name: "Population density",
              states: {
                hover: {
                  color: "#a4edba",
                },
              },
              tooltip: {
                valueSuffix: "/km²",
              },
            },
          ],
        };

        // Render the chart using HighchartsReact component
        chartRef.current = new Highcharts.mapChart("container", chartOptions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Cleanup function to destroy the chart when the component is unmounted
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{}} // Empty options as the chart is initialized in useEffect
      />
    </div>
  );
}
