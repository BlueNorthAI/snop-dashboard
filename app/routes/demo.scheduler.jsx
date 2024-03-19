import * as React from "react";

import {
  Scheduler,
  WeekView,
  WorkWeekView,
} from "@progress/kendo-react-scheduler";
import { sampleData, displayDate } from "../data/events-utc";
import { Day } from "@progress/kendo-date-math";


export default function App () {
  return (
    <div className="m-4">
      <div className="p-2 grid grid-cols-1 md:grid-cols-1 rounded-lg bg-white shadow-xl shadow-slate-900/10">
        <Scheduler data={sampleData} defaultDate={displayDate}>
          <WorkWeekView
            title="Work Week"
            workWeekStart={Day.Monday}
            workWeekEnd={Day.Thursday}
          />
          <WeekView
            title="Full Week"
            workWeekStart={Day.Monday}
            workWeekEnd={Day.Thursday}
          />
        </Scheduler>
      </div>
    </div>
  );
};

