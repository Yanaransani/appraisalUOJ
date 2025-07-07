import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SectionFiveFour() {
  const [isNLResponsibiliy, setIsNLResponsibiliy] = useState("");
  const { values, setFieldValue } = useFormikContext();

  return (
    <div>
      <FieldArray name="nLResponsibilities">
        {({ push, remove }) => (
          <div>
            <fieldset className="mb-4">
              <div className="flex items-center gap-4">
                <p className="mt-1 mb-2 font-medium">
                  5.4 National level (NL) coordination
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {["Fill", "N/A"].map((title) => (
                    <div className="flex items-center gap-x-2" key={title}>
                      <Field
                        type="radio"
                        name="nLResponsibility"
                        value={title}
                        id={title}
                        checked={values.nLResponsibility === title}
                        onChange={() => {
                          setFieldValue("nLResponsibility", title);
                          setIsNLResponsibiliy(title);
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
                name="nLResponsibility"
                component="div"
                className="text-red-500 text-sm"
              />
            </fieldset>

            {isNLResponsibiliy === "Fill" && (
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
                      {values.nLResponsibilities.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 border text-center">
                            {index + 1}
                          </td>
                          <td>
                            <Field
                              as="select"
                              name={`nLResponsibilities[${index}].role`}
                              className="w-full border px-2 py-1 rounded"
                            >
                              <option value="">Choose Role</option>
                              <option value="Coordinator of projects of NL relevance">
                                Coordinator of projects of NL relevance
                              </option>
                              <option value="Director @NL Institutes">Director @NL Institutes</option>
                              <option value="Member of NL committees/projects/taskforces">
                                Member of NL committees/projects/taskforces
                              </option>
                              <option value="Resource person in NL workshops">
                                Resource person in NL workshops
                              </option>
                            </Field>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name={`nLResponsibilities[${index}].details`}
                              className="w-full border px-2 py-1 rounded"
                            />
                          </td>
                          <td>
                            <Field
                              type="date"
                              id="date"
                              name={`nLResponsibilities[${index}].duration`}
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
                        setFieldValue("evidenceFileForNLProjects", file);
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
