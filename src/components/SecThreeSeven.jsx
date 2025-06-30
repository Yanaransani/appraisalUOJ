import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage, useFormikContext } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SectionThreeSeven() {
  const { values, setFieldValue } = useFormikContext();
  const [isLaboratory, setIsLaboratory] = useState("");

  return (
    <FieldArray name="laboratories">
      {({ push, remove }) => (
        <div>
          <fieldset className="mb-4">
            <div className="flex items-center gap-4">
              <p className="mt-1 mb-2 font-medium">
                3.7 Planning and Development of Laboratory and other teaching
                materials (provide details)
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Fill", "N/A"].map((title) => (
                  <div className="flex items-center gap-x-2" key={title}>
                    <Field
                      type="radio"
                      name="laboratory"
                      value={title}
                      id={title}
                      checked={values.laboratory === title}
                      onChange={() => {
                        setFieldValue("laboratory", title);
                        setIsLaboratory(title);
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
              name="laboratory"
              component="div"
              className="text-red-500 text-sm"
            />
          </fieldset>

          {isLaboratory === "Fill" && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                      <th className="px-4 py-2 border">SrNo.</th>
                      <th className="px-4 py-2 border">Teaching material</th>
                      <th className="px-4 py-2 border">Details</th>
                      <th className="px-4 py-2 border text-center">
                        Add Row{" "}
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              material: "",
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
                    {values.laboratories.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border text-center">
                          {index + 1}
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            as="select"
                            name={`laboratories[${index}].material`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose a material</option>
                            <option value="Preparation and use of audion and video">Preparation and use of audion and video</option>
                            <option value="Computer-Aided instructional Software">Computer-Aided instructional Software</option>
                            <option value="Preparation of dual delivery of lessons">
                              Preparation of dual delivery of lessons
                            </option>
                            <option value="Particularly with a view to distance education">Particularly with a view to distance education</option>
                            <option value="related to artificial intelligence">related to artificial intelligence</option>
                          </Field>
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            type="text"
                            name={`laboratories[${index}].details`}
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
                      setFieldValue("evidenceFileForLab", file); // ⬅️ store the file in Formik
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
