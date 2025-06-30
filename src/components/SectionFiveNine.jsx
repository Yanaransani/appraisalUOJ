import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SectionFiveNine() {
  const [isWelfare, setIsWelfare] = useState("");
  const { values, setFieldValue } = useFormikContext();

  return (
    <div>
      <FieldArray name="welfareActivities">
        {({ push, remove }) => (
          <div>
            <fieldset className="mb-4">
              <div className="flex items-center gap-4">
                <p className="mt-1 mb-2 font-medium">
                  5.9 Staff and Student Welfare Activities
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {["Fill", "N/A"].map((title) => (
                    <div className="flex items-center gap-x-2" key={title}>
                      <Field
                        type="radio"
                        name="welfareActivity"
                        value={title}
                        id={title}
                        checked={values.welfareActivity === title}
                        onChange={() => {
                          setFieldValue("welfareActivity", title);
                          setIsWelfare(title);
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
                name="welfareActivity"
                component="div"
                className="text-red-500 text-sm"
              />
            </fieldset>

            {isWelfare === "Fill" && (
              <>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                        <th className="px-4 py-2 border">SrNo.</th>
                        <th className="px-4 py-2 border">
                          Nature of the activity (e.g. workshop)
                        </th>
                        <th className="px-4 py-2 border">Date</th>
                        <th className="px-4 py-2 border">
                          Topic / Content area
                        </th>
                        <th className="px-4 py-2 border text-center">
                          Add Row{" "}
                          <button
                            type="button"
                            onClick={() =>
                              push({
                                activity: "",
                                date: "",
                                topic: "",
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
                      {values.welfareActivities.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 border text-center">
                            {index + 1}
                          </td>
                          <td>
                            <Field
                              type="text"
                              name={`welfareActivities[${index}].activity`}
                              className="w-full border px-2 py-1 rounded"
                            />
                          </td>
                          <td>
                            <Field
                              type="date"
                              id="date"
                              name={`welfareActivities[${index}].date`}
                              className="w-full border px-2 py-1 rounded"
                            />
                          </td>
                          <td>
                            <Field
                              type="text"
                              name={`welfareActivities[${index}].topic`}
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
                        setFieldValue(
                          "evidenceFileForWelfareActivities",
                          file
                        );
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
