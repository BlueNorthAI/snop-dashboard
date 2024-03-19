
import { kpiService_m, kpiInv_m } from "~/data/analysis/serviceData";
import { Fragment, useState, useEffect } from "react";
import {
  Disclosure,
 
  Transition,
  Dialog,
  
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon,FunnelIcon } from "@heroicons/react/24/outline";
import { Form } from "@remix-run/react";
import {
  ChevronDoubleRightIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  {
    name: "Service",
    href: "/demo/dashboard/analysis/serviceAnalysis",
    current: true,
  },
  {
    name: "SKU",
    href: "/demo/dashboard/analysis/skuAnalysis",
    current: false,
  },
  {
    name: "SKU Pro",
    href: "/demo/dashboard/analysis/skuproAnalysis",
    current: false,
  },
  {
    name: "Under/shape",
    href: "/demo/dashboard/analysis/underAnalysis",
    current: false,
  },
  {
    name: "Action:Redeploy",
    href: "/demo/dashboard/analysis/actionAnalysis",
    current: false,
  },
];

const stats = [
  { name: "Backorders", stat: "+66K" },
  { name: "OTIF (commit)", stat: "-1.0%" },
  { name: "OTIF (ship)", stat: "-2.0%" },
  { name: "Total Change to last", stat: "+1.5M" },
];
const stats2 = [
  { name: "DC 4 Change to last Week", stat: "-0.4M" },
  { name: "DC 3 Change to last Week ", stat: "+0.7M" },
  { name: "DC 2 Change to last Week", stat: "-4.2M" },
  { name: "DC 1 Change to last Week", stat: "+5.5M" },
];

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OverviewAnalysisRoute() {;
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const breeds = [];

    useEffect(() => {
      requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
      );
      const json = await res.json();

      setPets(json.pets);
    }

    function handleChange(e) {
      setLocation(e.target.value);
    }

    const [slideopen, setslideOpen] = useState(false);
  return (
    <>
      <div className="w-full h-screen">
        <div className=" bg-slate-600 ">
          <div className="ml-4 flex h-16 items-center justify-start">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="text-3xl font-bold text-white">
                  Service & Inventory Performance
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="top-15 fixed right-0 mt-4 flex cursor-pointer items-center 
                rounded-l-lg border bg-white p-2 text-sm font-semibold text-gray-900 shadow-xl hover:bg-rose-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={() => setslideOpen(!slideopen)}
        >
          <AdjustmentsHorizontalIcon
            className="h-5 w-5 items-center"
            aria-hidden="true"
          />
        </button>

        {/* stats */}

        <div>
          <dl className="mx-4 my-2 grid grid-cols-1 gap-6  lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
              >
                <dt className="truncate text-center text-lg font-medium text-gray-500">
                  {item.name}
                </dt>
                <dd className="mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="mx-4 w-full border-t border-gray-200" />
            </div>
          </div>
        </div>

        {/* charts */}

        <ul className="mx-4 my-4 grid grid-cols-1  gap-6 md:grid-cols-2 ">
          {kpiService_m.map((kpi) => (
            <li
              key={kpi.Name}
              className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10"
            >
              <div className="relative flex flex-1 flex-col py-2 pl-3">
                <div className="flex items-baseline gap-2">
                  <div>
                    <h3 className="text-base m-2 font-medium text-gray-900">
                      {kpi.Name}
                    </h3>
                    <h1 className="font-display  mb-3 text-4xl font-bold text-black">
                      {kpi.Value}
                    </h1>
                  </div>
                </div>
                <div>{kpi.container}</div>
              </div>
            </li>
          ))}
        </ul>

        <div>
          <dl className="mx-4 mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-4">
            {stats2.map((item) => (
              <div
                key={item.name}
                className="items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
              >
                <dt className="truncate text-center text-lg font-medium text-gray-500">
                  {item.name}
                </dt>
                <dd className="mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="mx-4 w-full border-t border-gray-200" />
            </div>
          </div>
        </div>

        {/* charts */}

        <ul className="mx-4 my-4 grid grid-cols-1 gap-6  ">
          {kpiInv_m.map((kpi) => (
            <li
              key={kpi.Name}
              className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10"
            >
              <div className="relative flex flex-1 flex-col py-2 pl-3">
                <div className="flex items-baseline gap-2">
                  <div>
                    <h3 className="text-base m-2 font-medium text-gray-900">
                      {kpi.Name}
                    </h3>
                    <h1 className="font-display  mb-3 text-4xl font-bold text-black">
                      {kpi.Value}
                    </h1>
                  </div>
                </div>
                <div>{kpi.container}</div>
              </div>
            </li>
          ))}
        </ul>

        <footer className="mt-auto">
          <Disclosure as="nav" className="h-16 border-t bg-white">
            {({ open }) => (
              <>
                <div className="w-full px-2 py-2 sm:px-2 lg:px-2">
                  <div className="flex h-12 items-center justify-start">
                    <h2 className="text-md mr-2 font-bold text-gray-500">
                      Demand Analysis
                    </h2>
                    <ChevronDoubleRightIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 items-center text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <div className="flex items-center">
                      <div className="hidden md:block">
                        {/* <div className="flex items-baseline space-x-4"> */}
                        <div className="flex items-baseline">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-blue-500 text-white"
                                  : "text-black hover:bg-blue-500 hover:text-white",
                                "text-md mx-2 rounded-md px-5 py-2 font-medium",
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </footer>
        {/* </div> */}
      </div>

      <Transition.Root show={slideopen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setslideOpen}>
          <div className="fixed inset-0 mt-10">
            <div className="mt-6">
              <div className="pointer-events-none ">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full -translate-y-1/3"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="top-15 pointer-events-auto fixed right-0 z-10">
                    <div className=" ">
                      {/* Filters */}
                      <section aria-labelledby="filter-heading">
                        <div className="my-4 rounded-lg border bg-white py-2 shadow-2xl">
                          <div className="px-4">
                            <div className="flow-root">
                              <div className="-mx-4  flex items-center divide-x divide-gray-200">
                                <span className="mx-4 inline-flex">
                                  Filters
                                </span>
                                <Form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    requestPets();
                                  }}
                                >
                                  <label htmlFor="location" className="ml-4">
                                    Location
                                    <input
                                      id="location"
                                      value={location}
                                      placeholder="Location"
                                      onChange={handleChange}
                                      className="mx-4"
                                    />
                                  </label>

                                  <label htmlFor="animal" className="mx-2">
                                    Animal
                                    <select
                                      id="animal"
                                      value={animal}
                                      className="mx-2"
                                      onChange={(e) =>
                                        setAnimal(e.target.value)
                                      }
                                    >
                                      <option />
                                      {ANIMALS.map((animal) => (
                                        <option key={animal} value={animal}>
                                          {animal}
                                        </option>
                                      ))}
                                    </select>
                                  </label>

                                  <label htmlFor="breed" className="mx-2">
                                    Breed
                                    <select
                                      disabled={!breeds.length}
                                      id="breed"
                                      value={breed}
                                      onChange={(e) => setBreed(e.target.value)}
                                      onBlur={(e) => setBreed(e.target.value)}
                                      className="mx-2"
                                    >
                                      <option />
                                      {breeds.map((breed) => (
                                        <option key={breed} value={breed}>
                                          {breed}
                                        </option>
                                      ))}
                                    </select>
                                  </label>

                                  <div className="m-1 inline-flex ">
                                    <button
                                      type="submit"
                                      className="rounded-full border bg-gray-200 p-2 hover:bg-gray-100 "
                                    >
                                      <FunnelIcon
                                        className="h-4 w-4 text-gray-500"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </Form>
                                <button
                                  type="button"
                                  className="mx-2 flex items-center pr-2 text-gray-500 hover:text-gray-900"
                                  onClick={() => setslideOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="h-4 w-4  "
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
