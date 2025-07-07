import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SectionFourTwo() {
  const { values, setFieldValue } = useFormikContext();
  const [isPresentation, setIsPresentation] = useState("");

  return (
    <FieldArray name="presentations">
      {({ push, remove }) => (
        <div>
          <fieldset className="mb-4">
            <div className="flex items-center gap-4">
              <p className="mt-1 mb-2 font-medium">
                4.2 Conference presentations (oral or poster) during the year
                under review (provide the title of the presentation, title of
                conference and dates)
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Fill", "N/A"].map((title) => (
                  <div className="flex items-center gap-x-2" key={title}>
                    <Field
                      type="radio"
                      name="presentation"
                      value={title}
                      id={title}
                      checked={values.presentation === title}
                      onChange={() => {
                        setFieldValue("presentation", title);
                        setIsPresentation(title);
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
              name="presentation"
              component="div"
              className="text-red-500 text-sm"
            />
          </fieldset>

          {isPresentation === "Fill" && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                      <th className="px-4 py-2 border">SrNo.</th>
                      <th className="px-4 py-2 border">Title of the conference Name of Scientific Journal</th>
                      <th className="px-4 py-2 border">Presentation Title</th>
                      <th className="px-4 py-2 border">Medium</th>
                      <th className="px-4 py-2 border">Date of the conference</th>
                      <th className="px-4 py-2 border text-center">
                        Add Row{" "}
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              title: "",
                              preTitle: "",
                              medium: "",
                              date: ""
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
                    {values.presentations.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border text-center">
                          {index + 1}
                        </td>
                        <td>
                          <Field
                            type="text"
                            name={`presentations[${index}].title`}
                            className="w-full border px-2 py-1 rounded"
                          />
                        </td>
                        <td>
                          <Field
                            type="text"
                            name={`presentations[${index}].preTitle`}
                            className="w-full border px-2 py-1 rounded"
                          />
                        </td>
                        <td>
                          <Field
                            as="select"
                            name={`presentations[${index}].medium`}
                            className="w-full border px-2 py-1 rounded"
                          >
                            <option value="">Choose medium</option>
                            <option value="Oral">Oral</option>
                            <option value="Poster">
                              Poster
                            </option>
                          </Field>
                        </td>
                        <td>
                          <Field
                            type="date"
                            id="date"
                            name={`presentations[${index}].date`}
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
                      setFieldValue("evidenceFileForPresentations", file);
                    }}
                  />
                </div> */}
              </div>
            </>
          )}
        </div>
      )}
    </FieldArray>
  );
}
