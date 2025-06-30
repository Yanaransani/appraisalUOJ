import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage, useFormikContext } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SectionThreeSix() {
  const { values, setFieldValue } = useFormikContext();
  const [isCurriculum, setIsCurriculum] = useState("");

  return (
    <FieldArray name="curriculums">
      {({ push, remove }) => (
        <div>
          <fieldset className="mb-4">
            <div className="flex items-center gap-4">
              <p className="mt-1 mb-2 font-medium">
                3.6 Curriculum planning and development or existing courses and new courses
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Fill", "N/A"].map((title) => (
                  <div className="flex items-center gap-x-2" key={title}>
                    <Field
                      type="radio"
                      name="curriculum"
                      value={title}
                      id={title}
                      checked={values.curriculum === title}
                      onChange={() => {
                        setFieldValue("curriculum", title);
                        setIsCurriculum(title);
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
              name="curriculum"
              component="div"
              className="text-red-500 text-sm"
            />
          </fieldset>

          {isCurriculum === "Fill" && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                      <th className="px-4 py-2 border">SrNo.</th>
                      <th className="px-4 py-2 border">
                        Name of new curricula at the course or program level
                      </th>
                      <th className="px-4 py-2 border">Date</th>
                      <th className="px-4 py-2 border">Details</th>
                      <th className="px-4 py-2 border text-center">
                        Add Row{" "}
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              courseProgram: "",
                              date: "",
                              details: "",
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
                    {values.curriculums.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border text-center">
                          {index + 1}
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            type="text"
                            name={`curriculums[${index}].courseProgram`}
                            className="w-full rounded-md"
                          />
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            type="date"
                            id="date"
                            name={`curriculums[${index}].date`}
                            className="w-full rounded-md"
                          />
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            type="text"
                            name={`curriculums[${index}].details`}
                            className="w-full rounded-md"
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
                      setFieldValue("evidenceFileForCurriculum", file); // ⬅️ store the file in Formik
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </FieldArray>
  );
}
