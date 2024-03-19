import WrapperMultiColumnChart from '~/kendo/charts/column/WrapperColumnChart'
import WrapperMultiLineChart from '~/kendo/charts/Line/WrapperLineChart'
import WrapperMultiStackColChart from '~/kendo/charts/stackcol/WrapperStackColChart'

import {
  discountproductCategories_m, discountproductSeries_m, cancellationCategories_m, cancellationSeries_m,
invCategories_m,
invSeries_m} from '~/kendo/rawData/analysis/serviceAnalysis'


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
    Name: "End Customer backorder Performance",
    container: (
      <WrapperMultiStackColChart
        category={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),
  },

  {
    Name: "OTIF Performance",
    container: (
      <WrapperMultiLineChart
        category={cancellationCategories_m}
        series={cancellationSeries_m}
      />
    ),
  },
 
];

export const kpiInv_m = [
  {
    Name: "Inventory Performance",
    container: (
      <WrapperMultiStackColChart
        category={invCategories_m}
        series={invSeries_m}
      />
    ),
  },
];

