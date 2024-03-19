import MapContainer  from "~/kendo/map/kendomap.client";


export default function WrapperChartGrid() { 
  return typeof document !== "undefined" ? <MapContainer /> : null;
}