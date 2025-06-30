import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SectionFiveTwo() {
  const [isFlResponsibiliy, setIsFlResponsibiliy] = useState("");
  const { values, setFieldValue } = useFormikContext();

  return (
    <div>
      <FieldArray name="flResponsibilities">
        {({ push, remove }) => (
          <div>
            <fieldset className="mb-4">
              <div className="flex items-center gap-4">
                <p className="mt-1 mb-2 font-medium">
                  5.2 Faculty level (FL) responsibilities
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {["Fill", "N/A"].map((title) => (
                    <div className="flex items-center gap-x-2" key={title}>
                      <Field
                        type="radio"
                        name="flResponsibility"
                        value={title}
                        id={title}
                        checked={values.flResponsibility === title}
                        onChange={() => {
                          setFieldValue("flResponsibility", title);
                          setIsFlResponsibiliy(title);
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
                name="flResponsibility"
                component="div"
                className="text-red-500 text-sm"
              />
            </fieldset>

            {isFlResponsibiliy === "Fill" && (
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
                      {values.flResponsibilities.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 border text-center">
                            {index + 1}
                          </td>
                          <td>
                            <Field
                              as="select"
                              name={`flResponsibilities[${index}].type`}
                              className="w-full border px-2 py-1 rounded"
                            >
                              <option value="">Choose Type</option>
                              <option value="Dean">Dean</option>
                              <option value="Coodinator of FL Entities">
                                Coodinator of FL Entities
                              </option>
                              <option value="Chairperson of FL Committees">
                                Chairperson of FL Committees
                              </option>
                              <option value="Coodinator of FL Projects">
                                Coodinator of FL Projects
                              </option>
                              <option value="Deputy Proctor">
                                Deputy Proctor
                              </option>
                              <option value="Student Counsellor">
                                Student Counsellor
                              </option>
                              <option value="Student Mentor">
                                Student Mentor
                              </option>
                              <option value="FL Career Guidance Advisors / CGEE member">
                                FL Career Guidance Advisors / CGEE member
                              </option>
                              <option value="Acadamic Counsellor">
                                Acadamic Counsellor
                              </option>
                              <option value="Member of Faculty level subcommittees/projects">
                                Member of Faculty level subcommittees/projects
                              </option>
                              <option value="Resource person in FL workshops">
                                Resource person in FL workshops
                              </option>
                              <option value="Senior Treasurer of FL Societies/Unions">
                                Senior Treasurer of FL Societies/Unions
                              </option>
                            </Field>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name={`flResponsibilities[${index}].details`}
                              className="w-full border px-2 py-1 rounded"
                            />
                          </td>
                          <td>
                            <Field
                              type="date"
                              id="date"
                              name={`flResponsibilities[${index}].duration`}
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

                  <div className="mt-4 flex items-center gap-4">
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
                        setFieldValue("evidenceFileForFLProjects", file);
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </FieldArray>
    </div>
  );
}
