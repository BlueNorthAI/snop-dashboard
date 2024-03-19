import WrapperMultiColumnChart from '~/kendo/charts/column/WrapperColumnChart'
import WrapperMultiBarChart from '~/kendo/charts/bar/WrapperBarChart'
import WrapperMultiLineChart from '~/kendo/charts/Line/WrapperLineChart'
import WrapperMultiStackColChart from '~/kendo/charts/stackcol/WrapperStackColChart'
import WrapperMultiColumnColorChart from '../../kendo/charts/columnColor/WrapperColorColumnChart'
import WrapperMultiBarColorChart from '../../kendo/charts/barColor/WrapperColorBarChart'
import {
  pro1Data,
  pro2Data,
  pro3Data,
  pro4Data,
  pro5Data,
  pro6Data,
  pro1Categories_m,
  pro1Series_m,
  pro2Categories_m,
  pro2Series_m,
  metricCategories_m,
  metricSeries_m,
  metric1Categories_m,
  metric1Series_m,
  metric2Categories_m,
  metric2Series_m,
  seriesData,
} from "~/kendo/rawData/analysis/skuproAnalysis";


export const reviewTabs = [
  { name: 'Month', href: '#', current: true },
  { name: 'Quarter', href: '#', current: false },
  { name: 'Year', href: '#', current: false },
]

export const meetingTabs = [
  { name: 'Daily', href: '#', current: true },
  { name: 'Weekly', href: '#', current: false },
  
]


export const kpiService_m = [
  {
    Name: "OTIF at commit, order lines missed",
    container: <WrapperMultiBarColorChart seriesData={pro1Data} />,
  },

  {
    Name: "# End-Customer backorder",
    container: <WrapperMultiBarColorChart seriesData={pro2Data} />,
  },

  {
    Name: "$ End-Customer backorders",
    container: <WrapperMultiBarColorChart seriesData={pro3Data} />,
  },
];

export const kpiInv_m = [
  {
    Name: "Shortage in 8 weeks",
    container: <WrapperMultiBarColorChart seriesData={pro4Data} />,
  },

  {
    Name: "# End-Customer backorders",
    container: <WrapperMultiBarColorChart seriesData={pro5Data} />,
  },

  {
    Name: "$ End-Customer backorder",
    container: <WrapperMultiBarColorChart seriesData={pro6Data} />,
  },
];

