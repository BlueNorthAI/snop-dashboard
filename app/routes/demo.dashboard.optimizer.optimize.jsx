import { React, Fragment, useState } from "react";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import {

  useNavigation,
  Link,Form
} from "@remix-run/react";

import { PlusIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}




const tabs = [
  { name: "Scenarios 1", href: "#", current: true },
  { name: "Scenarios 2", href: "#", current: false },
];

const plans = [
  { name: "Optimization completed", description: "1:51:32 PM - 2/23/2021" },
  {
    name: "Scenario modified",
    description: "1:21:17 PM - 6/6/2023",
  },
  {
    name: "Solve status",
    description: "OPTIMAL",
  },
  {
    name: "CS Job ID",
    description: "eeeb3265-3cf4-44f4-944d-ea7dad4c12ed",
  },
];

export default function OptimizerRoute() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(plans[0]);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isCancelling = navigation.state === "cancelling";
 
  return (
    <>
      <div className="w-full bg-sky-500">
        <div className="ml-4 flex h-16 items-center justify-start">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="text-3xl font-bold text-white">
                Optimizer Dashboard
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4">
        <div className="my-4 rounded-lg border bg-white shadow-sm md:flex md:items-center md:justify-between">
          <div className=" border-b border-gray-200 ">
            <div className="p-2 sm:flex sm:items-baseline">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Scenarios
              </h3>
              <div className="mt-4 border-l sm:ml-2 sm:mt-0">
                <nav className="-mb-px ml-4 flex space-x-8">
                  {tabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      className={classNames(
                        tab.current
                          ? "border-rose-500 text-rose-500"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium"
                      )}
                      aria-current={tab.current ? "page" : undefined}
                    >
                      {tab.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className="mr-2 flex">
            <button
              type="button"
              className="rounded-full bg-rose-500 p-2 text-white shadow-lg hover:bg-rose-600 "
              onClick={() => setOpen(!open)}
            >
              <PlusIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* charts */}
        <div role="list" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10">
            <div className="relative flex flex-1 flex-col py-2 pl-3">
              <h3 className="m-2 text-base font-medium text-gray-900">
                Optimization
              </h3>

              <div className="m-2 rounded-lg border px-4 py-2">
                <div className="my-2 space-y-2">
                  {plans.map((plan) => (
                    <>
                      <div className="relative block cursor-pointer rounded-lg border px-6 py-3 shadow-sm sm:flex sm:justify-between">
                        <span className="flex flex-col text-sm font-semibold text-gray-900">
                          {plan.name}

                          <p className="block text-gray-500 sm:inline">
                            {plan.description}
                          </p>
                        </span>
                      </div>
                    </>
                  ))}
                </div>

                <div className="flex justify-center  pt-2">
                  <button
                    type="button"
                    className="text-md rounded-md border bg-indigo-500 px-5 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600"
                    onClick={() => setOpen(false)}
                  >
                    LOG
                  </button>
                  <button
                    type="submit"
                    className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
                  >
                    OPTIMIZE
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10">
            <div className="relative flex flex-1 flex-col py-2 pl-3">
              <h3 className="m-2 text-base font-medium text-gray-900">
                Parameters
              </h3>

              <div className="m-2 flex flex-row justify-start rounded-lg border ">
                <div className="mx-4 my-4 flex flex-1 flex-col">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-400"
                  >
                    Spare threshold
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="peer block w-full border-0 bg-gray-50 py-1.5 pr-4 text-right text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="20"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 border-t border-gray-300 "
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-400"
                    >
                      Number of Knives
                    </label>
                    <div className="relative mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="peer block w-full border-0 bg-gray-50 py-1.5 pr-4 text-right text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="7"
                      />
                      <div
                        className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 "
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="bg-blue-900 px-4 py-4">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="py-1 text-base font-semibold leading-6 text-white">
                              Create Scenario
                            </Dialog.Title>

                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md  text-slate-300 hover:text-white"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-2">
                          <Form>
                            <p>
                              <label htmlFor="title">Title</label>
                              <input
                                type="text"
                                id="title"
                                name="title"
                                required
                              />
                            </p>
                            <button
                              type="submit"
                              name="intent"
                              // value={isNewPost ? "create" : "update"}
                              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Submiting..." : "Submit"}
                            </button>
                          </Form>
                          <span className="text-md block font-medium leading-6 text-gray-900">
                            Name
                          </span>
                          <div className="mt-2">
                            <div className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                              <p>
                                {/* {errors?.title ? (
                                <em className="text-red-600">{errors.title}

                              </em>
                              ): null} */}
                                Blank 1
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="px-4 py-2">
                          <span className="text-md block font-medium leading-6 text-gray-900">
                            Description
                          </span>
                          <div className="mt-2">
                            <div className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                              <p>
                                {/* {errors?.description ? (
            <em className="text-red-600">{errors.description}</em>
          ) : null} */}
                                Blank scenario with default settings
                              </p>
                            </div>
                          </div>
                          <div className="mb-2 border-b p-2"></div>
                        </div>

                        <div className="px-4 py-2">
                          <RadioGroup value={selected} onChange={setSelected}>
                            <RadioGroup.Label className="text-md block font-medium leading-6 text-gray-900">
                              Select a type of scenario
                            </RadioGroup.Label>
                            <div className="mt-2 space-y-4">
                              {plans.map((plan) => (
                                <RadioGroup.Option
                                  key={plan.name}
                                  value={plan}
                                  className={({ checked, active }) =>
                                    classNames(
                                      checked
                                        ? "border-transparent"
                                        : "border-gray-300",
                                      active ? "" : "",
                                      "relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <span className="flex items-center">
                                        <span className="flex flex-col text-sm">
                                          <RadioGroup.Label
                                            as="span"
                                            className="font-medium text-gray-900"
                                          >
                                            {plan.name}
                                          </RadioGroup.Label>
                                          <RadioGroup.Description
                                            as="span"
                                            className="text-gray-500"
                                          >
                                            <span className="block sm:inline">
                                              {plan.description}
                                            </span>{" "}
                                          </RadioGroup.Description>
                                        </span>
                                      </span>

                                      <span
                                        className={classNames(
                                          active ? "border" : "border-2",
                                          checked
                                            ? "border-rose-500"
                                            : "border-transparent",
                                          "pointer-events-none absolute -inset-px rounded-lg"
                                        )}
                                        aria-hidden="true"
                                      />
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      <div className="flex justify-center p-2">
                     
                        <button
                          type="submit"
                          name="intent"
                          className="text-md rounded-md border bg-indigo-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600"
                          disabled={isCancelling}
                          onClick={() => setOpen(false)}
                        >
                          {isCancelling ? "Cancelling...." : "Cancel"}
                        </button>
                        <button
                          type="submit"
                          className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="mt-4 flex justify-start p-2 ">
        <Link to="/demo/dashboard/optimizer/input">
          <button
            type="button"
            className="text-md rounded-md border bg-indigo-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600"
          >
            Input
          </button>
        </Link>
        <Link to="/demo/dashboard/optimizer/master">
          <button
            type="submit"
            className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
          >
            Master
          </button>
        </Link>
        <Link to="/demo/dashboard/optimizer/solution">
          <button
            type="submit"
            className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
          >
            Solution
          </button>
        </Link>
      </div>
    </>
  );
}
