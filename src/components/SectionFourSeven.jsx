import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SectionFourSeven() {
  const { values, setFieldValue } = useFormikContext();
  const [isPrizes, setIsPrizes] = useState("");

  return (
    <FieldArray name="prizes">
      {({ push, remove }) => (
        <div>
          <fieldset className="mb-4">
            <div className="flex items-center gap-4">
              <p className="mt-1 mb-2 font-medium">
                4.7 Awards and prizes for research (provide details)
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Fill", "N/A"].map((title) => (
                  <div className="flex items-center gap-x-2" key={title}>
                    <Field
                      type="radio"
                      name="prize"
                      value={title}
                      id={title}
                      checked={values.prize === title}
                      onChange={() => {
                        setFieldValue("prize", title);
                        setIsPrizes(title);
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
              name="meeting"
              component="div"
              className="text-red-500 text-sm"
            />
          </fieldset>

          {isPrizes === "Fill" && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                      <th className="px-4 py-2 border">SrNo.</th>
                      <th className="px-4 py-2 border">Honours</th>
                      <th className="px-4 py-2 border">Year</th>
                      <th className="px-4 py-2 border">Name of honours</th>
                      <th className="px-4 py-2 border">Name of the Research</th>
                      <th className="px-4 py-2 border">Name of the institute</th>
                      <th className="px-4 py-2 border text-center">
                        Add Row{" "}
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              honours: "",
                              year: "",
                              nameOfHonour: "",
                              nameOfResearch: "",
                              insitute: ""
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
                    {values.prizes.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border text-center">
                          {index + 1}
                        </td>
                        <td>
                          <Field
                            as="select"
                            name={`prizes[${index}].honours`}
                            className="w-full border px-2 py-1 rounded"
                          >
                            <option value="">Choose Honours</option>
                            <option value="Awards">Awards</option>
                            <option value="Prizes">Prizes</option>
                            <option value="Recognition">Recognition</option>
                          </Field>
                        </td>
                        <td>
                          <Field
                            type="text"
                            name={`prizes[${index}].year`}
                            className="w-full border px-2 py-1 rounded"
                          />
                        </td>
                        <td>
                          <Field
                            type="text"
                            name={`prizes[${index}].nameOfHonour`}
                            className="w-full border px-2 py-1 rounded"
                          />
                        </td>
                        <td>
                          <Field
                            type="text"
                            name={`prizes[${index}].nameOfResearch`}
                            className="w-full border px-2 py-1 rounded"
                          />
                        </td>
                        <td>
                          <Field
                            type="text"
                            name={`prizes[${index}].insitute`}
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
                      setFieldValue("evidenceFileForPrizes", file);
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
