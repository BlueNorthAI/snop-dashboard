const stats = [
  { name: "Total Subscribers", stat: "71,897" },
  { name: "Avg. Open Rate", stat: "58.16%" },
  { name: "Avg. Click Rate", stat: "24.57%" },
  { name: "Total Subscribers", stat: "71,897" },
  { name: "Avg. Open Rate", stat: "58.16%" },
  { name: "Avg. Click Rate", stat: "24.57%" },
];

export default function Truck() {
  return (
    <>
      <div className="md:flex md:items-center md:justify-between h-16 bg-gray-200 px-2">
        <div className="min-w-0 flex-1">
          <h2 className="ml-4 text-2xl font-bold leading-7 text-blue-950 sm:truncate sm:text-3xl sm:tracking-tight">
            Transportation Cleansheet
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <div className="flex items-center ">
            <span className="mx-2">Orgin</span>
            <select
              id="location"
              name="location"
              className="block w-full rounded-md text-gray-900 p-1 ring-1 ring-inset ring-gray-300"
              defaultValue="Chennai"
            >
              <option>Chennai</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div className="flex items-center ">
            <span className="mx-2">Destination</span>
            <select
              id="location"
              name="location"
              className="block w-full rounded-md text-gray-900 p-1 ring-1 ring-inset ring-gray-300"
              defaultValue="Kolkata"
            >
              <option>Kolkata</option>
              <option>Bangalore</option>
              <option>Bhopal</option>
              <option>Goa</option>
            </select>
          </div>

          <div className="flex items-center ">
            <span className="mx-2">Distance</span>
            <select
              id="location"
              name="location"
              className="block w-full rounded-md text-gray-900 p-1 ring-1 ring-inset ring-gray-300"
              defaultValue="1,676"
            >
              <option>1,676</option>
              <option>Bangalore</option>
              <option>Bhopal</option>
              <option>Goa</option>
            </select>
          </div>
        </div>
      </div>

      <ul className="mx-4 my-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-white p-2 rounded-lg">
          <div className="rounded-lg p-2 bg-black text-white">
            <div className="grid-cols-3 flex items-center justify-between">
              <div className="col-span-2">Truck Parameters</div>
              <div className="flex">
                <span className="mx-2">Destination</span>
                <select
                  id="location"
                  name="location"
                  className="block w-full rounded-md text-gray-900 p-1 ring-1 ring-inset ring-gray-300"
                  defaultValue="Kolkata"
                >
                  <option>Kolkata</option>
                  <option>Bangalore</option>
                  <option>Bhopal</option>
                  <option>Goa</option>
                </select>
              </div>
            </div>
          </div>
          <div>
           
            <dl className="my-2 grid grid-cols-1 gap-2 ">
              {stats.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 border"
                >
                  <dt className="truncate text-sm font-medium text-gray-500">
                    {item.name}
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                    {item.stat}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4"></div>
        <div className="rounded-lg bg-white p-4"></div>
      </ul>
    </>
  );
}
