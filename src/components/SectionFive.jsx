import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import SectionFiveTwo from "./SectionFiveTwo";
import SectionFiveThree from "./SectionFiveThree";
import SectionFiveFour from "./SectionFiveFour";
import SectionFiveFive from "./SectionFiveFive";
import SectionFiveSix from "./SectionFiveSix";
import SectionFiveSeven from "./SectionFiveSeven";
import SectionFiveEight from "./SectionFiveEight";
import SectionFiveNine from "./SectionFiveNine";

export default function SectionFive() {
  const [isResponsibiliy, setIsResponsibiliy] = useState("");
  const { values, setFieldValue } = useFormikContext();

  return (
    <div>
      <div className="flex items-center gap-4 mb-2">
        <h5 className="font-bold">Section 05:</h5>
        <p className="mt-1 mb-2 font-bold">Institutional Development</p>
      </div>

      <FieldArray name="dlResponsibilities">
        {({ push, remove }) => (
          <div>
            <fieldset className="mb-4">
              <div className="flex items-center gap-4">
                <p className="mt-1 mb-2 font-medium">
                  5.1 Departmental level (DL) responsibilities (include
                  Headship, planning and developing new laboratories / other
                  services)
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {["Fill", "N/A"].map((title) => (
                    <div className="flex items-center gap-x-2" key={title}>
                      <Field
                        type="radio"
                        name="dlResponsibility"
                        value={title}
                        id={title}
                        checked={values.dlResponsibility === title}
                        onChange={() => {
                          setFieldValue("dlResponsibility", title);
                          setIsResponsibiliy(title);
                        }}
                      />
                      <label
                        htmlFor={title}
                        className="text-sm font-medium text-gray-900"
                      >
                        {title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <ErrorMessage
                name="dlResponsibility"
                component="div"
                className="text-red-500 text-sm"
              />
            </fieldset>

            {isResponsibiliy === "Fill" && (
              <>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                        <th className="px-4 py-2 border">SrNo.</th>
                        <th className="px-4 py-2 border">
                          Type of Coordination Work
                        </th>
                        <th className="px-4 py-2 border">Details</th>
                        <th className="px-4 py-2 border">Duration</th>
                        <th className="px-4 py-2 border text-center">
                          Add Row{" "}
                          <button
                            type="button"
                            onClick={() =>
                              push({
                                type: "",
                                details: "",
                                duration: "",
                              })
                            }
                            className="text-green-600 hover:text-green-800"
                          >
                            <FaCirclePlus />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {values.dlResponsibilities.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 border text-center">
                            {index + 1}
                          </td>
                          <td>
                            <Field
                              as="select"
                              name={`dlResponsibilities[${index}].type`}
                              className="w-full border px-2 py-1 rounded"
                            >
                              <option value="">Choose Type</option>
                              <option value="Head">Head</option>
                              <option value="Coodinator of DL project">
                                Coodinator of DL project
                              </option>
                              <option value="Coodinator of DL Project">
                                Coodinator of DL Project
                              </option>
                              <option value="Coodinator of DL Entities">
                                Coodinator of DL Entities
                              </option>
                              <option value="Member of DL/Subcommities/Projects">
                                Member of DL/Subcommities/Projects
                              </option>
                              <option value="Resource person in DL workshops">
                                Resource person in DL workshops
                              </option>
                              <option value="Senior Treasurer of DL societies">
                                Senior Treasurer of DL societies
                              </option>
                            </Field>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name={`dlResponsibilities[${index}].details`}
                              className="w-full border px-2 py-1 rounded"
                            />
                          </td>
                          <td>
                            <Field
                              type="date"
                              id="date"
                              name={`dlResponsibilities[${index}].duration`}
                              className="w-full border px-2 py-1 rounded"
                            />
                          </td>
                          <td className="px-4 py-2 border text-center">
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <FaCircleMinus />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* <div className="mt-4 flex items-center gap-4">
                    <p className="font-medium text-gray-700 whitespace-nowrap">
                      Add Evidence (PDF or Image):
                    </p>
                    <input
                      type="file"
                      accept=".pdf,image/*"
                      className="flex-1 text-sm text-gray-700
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-full file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-blue-50 file:text-blue-700
                                            hover:file:bg-blue-100"
                      onChange={(e) => {
                        const file = e.currentTarget.files[0];
                        setFieldValue("evidenceFileForDLProjects", file);
                      }}
                    />
                  </div> */}
                </div>
              </>
            )}
          </div>
        )}
      </FieldArray>
      <SectionFiveTwo />
      <SectionFiveThree />
      <SectionFiveFour />
      <SectionFiveFive />
      <SectionFiveSix />
      <SectionFiveSeven />
      <SectionFiveEight />
      <SectionFiveNine />
    </div>
  );
}
