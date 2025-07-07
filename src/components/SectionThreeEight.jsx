import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage, useFormikContext } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SectionThreeEight() {
  const { values, setFieldValue } = useFormikContext();
  const [isInnovative, setIsInnovative] = useState("");

  return (
    <FieldArray name="innovatives">
      {({ push, remove }) => (
        <div>
          <fieldset className="mb-4">
            <div className="flex items-center gap-4">
              <p className="mt-1 mb-2 font-medium">
                3.8 Development of innovative approaches to teaching (provide
                details)
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Fill", "N/A"].map((title) => (
                  <div className="flex items-center gap-x-2" key={title}>
                    <Field
                      type="radio"
                      name="innovative"
                      value={title}
                      id={title}
                      checked={values.innovative === title}
                      onChange={() => {
                        setFieldValue("innovative", title);
                        setIsInnovative(title);
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
              name="innovative"
              component="div"
              className="text-red-500 text-sm"
            />
          </fieldset>

          {isInnovative === "Fill" && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                      <th className="px-4 py-2 border">SrNo.</th>
                      <th className="px-4 py-2 border">Accademic year</th>
                      <th className="px-4 py-2 border">
                        Development of innovative approaches to teaching
                      </th>
                      <th className="px-4 py-2 border">Details</th>
                      <th className="px-4 py-2 border text-center">
                        Add Row{" "}
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              accYear: "",
                              approaches: "",
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
                    {values.innovatives.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border text-center">
                          {index + 1}
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            as="select"
                            name={`innovatives[${index}].accYear`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose Academic Year</option>
                            <option value="2019/20">2019/20</option>
                            <option value="2020/21">2020/21</option>
                            <option value="2021/22">2021/22</option>
                            <option value="2022/23">2022/23</option>
                            <option value="2023/24">2023/24</option>
                            <option value="2024/25">2024/25</option>
                            <option value="2025/26">2025/26</option>
                            <option value="2026/27">2026/27</option>
                          </Field>
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            as="select"
                            name={`innovatives[${index}].approaches`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose an Activity</option>
                            <option value="Any Other Specify">Any Other Specify</option>
                            <option value="CBD">CBD</option>
                            <option value="CBL">CBL</option>
                            <option value="Computer-based Practicals">
                              Computer-based Practicals
                            </option>
                            <option value="Demonstration">Demonstration</option>
                            <option value="Discussion">Discussion</option>
                            <option value="Group Work">Group Work</option>
                            <option value="Lab Classes">Lab Classes</option>
                            <option value="Lectures">Lectures</option>
                            <option value="MDS">MDS</option>
                            <option value="PBL">PBL</option>
                            <option value="Seminars">Seminars</option>
                            <option value="SGD">SGD</option>
                            <option value="Tutorials">Tutorials</option>
                            <option value="Visit">Visit</option>
                            <option value="Ward Classes">Ward Classes</option>
                          </Field>
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            type="text"
                            name={`innovatives[${index}].details`}
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

                {/* <div className="mt-4 flex items-center gap-4">
                  <p className="font-medium text-gray-700 whitespace-nowrap">
                    Add Evidence (PDF or Image):
                  </p>
                  <input
                    type="file"
                    name="evidenceFileForInnovative"
                    accept=".pdf,image/*"
                    className="flex-1 text-sm text-gray-700
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
                    onChange={(e) => {
                      const file = e.currentTarget.files[0];
                      setFieldValue("evidenceFileForInnovative", file);
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
