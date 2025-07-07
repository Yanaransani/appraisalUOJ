import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SectionFiveThree() {
  const [isUlResponsibiliy, setIsUlResponsibiliy] = useState("");
  const { values, setFieldValue } = useFormikContext();

  return (
    <div>
      <FieldArray name="uLResponsibilities">
        {({ push, remove }) => (
          <div>
            <fieldset className="mb-4">
              <div className="flex items-center gap-4">
                <p className="mt-1 mb-2 font-medium">
                  5.3 University level (UL) responsibilities
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {["Fill", "N/A"].map((title) => (
                    <div className="flex items-center gap-x-2" key={title}>
                      <Field
                        type="radio"
                        name="ulResponsibility"
                        value={title}
                        id={title}
                        checked={values.ulResponsibility === title}
                        onChange={() => {
                          setFieldValue("ulResponsibility", title);
                          setIsUlResponsibiliy(title);
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
                name="ulResponsibility"
                component="div"
                className="text-red-500 text-sm"
              />
            </fieldset>

            {isUlResponsibiliy === "Fill" && (
              <>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                        <th className="px-4 py-2 border">SrNo.</th>
                        <th className="px-4 py-2 border">Role</th>
                        <th className="px-4 py-2 border">Details</th>
                        <th className="px-4 py-2 border">Duration</th>
                        <th className="px-4 py-2 border text-center">
                          Add Row{" "}
                          <button
                            type="button"
                            onClick={() =>
                              push({
                                role: "",
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
                      {values.uLResponsibilities.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 border text-center">
                            {index + 1}
                          </td>
                          <td>
                            <Field
                              as="select"
                              name={`uLResponsibilities[${index}].role`}
                              className="w-full border px-2 py-1 rounded"
                            >
                              <option value="">Choose Role</option>
                              <option value="Vice Chancellor">Vice Chancellor</option>
                              <option value="Rector">Rector</option>
                              <option value="Deputy Vice Chancellor">
                                Deputy Vice Chancellor
                              </option>
                              <option value="Proctor">Proctor</option>
                              <option value="Director/Deputy @UL/Institutes/Centres/Linkages">
                                Director/Deputy @UL/Institutes/Centres/Linkages
                              </option>
                              <option value="Chairperson of UL Committtees">
                                Chairperson of UL Committtees
                              </option>
                              <option value="Coordinator of UL Entities">
                                Coordinator of UL Entities
                              </option>
                              <option value="Head @UL Units">Head @UL Units</option>
                              <option value="Member of a Team of Institutional Linkage">
                                Member of a Team of Institutional Linkage
                              </option>
                              <option value="Coordinator of UL projects">
                                Coordinator of UL projects
                              </option>
                              <option value="Resource person in UL workshops">
                                Resource person in UL workshops
                              </option>
                              <option value="Member of UL subcommittees projects">
                                Member of UL subcommittees projects
                              </option>
                              <option value="Senior Treasurer of UL">
                                Senior Treasurer of UL
                              </option>
                              <option value="Societies/Unions">
                                Societies/Unions
                              </option>
                              <option value="Warden/Sub-warden of Hostel">
                                Warden/Sub-warden of Hostel
                              </option>
                            </Field>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name={`uLResponsibilities[${index}].details`}
                              className="w-full border px-2 py-1 rounded"
                            />
                          </td>
                          <td>
                            <Field
                              type="date"
                              id="date"
                              name={`uLResponsibilities[${index}].duration`}
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
                        setFieldValue("evidenceFileForULProjects", file);
                      }}
                    />
                  </div> */}
                </div>
              </>
            )}
          </div>
        )}
      </FieldArray>
    </div>
  );
}
