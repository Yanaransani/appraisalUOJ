import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import SectionFourTwo from "./SectionFourTwo";
import SectionFourThree from "./SectionFourThree";
import SectionFourFour from "./SectionFourFour";
import SectionFourFive from "./SectionFourFive";
import SectionFourSix from "./SectionFourSix";
import SectionFourSeven from "./SectionFourSeven";

export default function SectionFour() {
  const [isOngoing, setIsOngoing] = useState("");
  const { values, setFieldValue } = useFormikContext();

  return (
    <div>
      <div className="flex items-center gap-4 mb-2">
        <h5 className="font-bold">Section 04:</h5>
        <p className="mt-1 mb-2 font-bold">
          Research and scholarship (to be completed by all staff, including
          those on long leave)
        </p>
      </div>

      <FieldArray name="projects">
        {({ push, remove }) => (
          <div>
            <fieldset className="mb-4">
              <div className="flex items-center gap-4">
                <p className="mt-1 mb-2 font-medium">
                  4.1 On-going projects (provide a title, and role in the
                  project e.g. Principal or Co-investigator,and source of
                  funding)
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {["Fill", "N/A"].map((title) => (
                    <div className="flex items-center gap-x-2" key={title}>
                      <Field
                        type="radio"
                        name="project"
                        value={title}
                        id={title}
                        checked={values.project === title}
                        onChange={() => {
                          setFieldValue("project", title);
                          setIsOngoing(title);
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
                name="project"
                component="div"
                className="text-red-500 text-sm"
              />
            </fieldset>

            {isOngoing === "Fill" && (
              <>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                        <th className="px-4 py-2 border">SrNo.</th>
                        <th className="px-4 py-2 border">Title of the project</th>
                        <th className="px-4 py-2 border">Collaboration with</th>
                        <th className="px-4 py-2 border">Role</th>
                        <th className="px-4 py-2 border">Source of funding</th>
                        <th className="px-4 py-2 border">Amount of Grants in LKR</th>
                        <th className="px-4 py-2 border text-center">
                          Add Row{" "}
                          <button
                            type="button"
                            onClick={() =>
                              push({
                                title: "",
                                collaboration: "",
                                role: "",
                                funding: "",
                                amount: ""
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
                      {values.projects.map(
                        (item, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 border text-center">
                              {index + 1}
                            </td>
                            <td>
                              <Field
                                type="text"
                                name={`projects[${index}].title`}
                                className="w-full border px-2 py-1 rounded"
                              />
                            </td>
                            <td>
                            <Field
                                type="text"
                                name={`projects[${index}].collaboration`}
                                className="w-full border px-2 py-1 rounded"
                              />
                            </td>
                            <td>
                              <Field
                                as="select"
                                name={`projects[${index}].role`}
                                className="w-full border px-2 py-1 rounded"
                              >
                                <option value="">
                                  Choose role
                                </option>
                                <option value="Principal">Principal</option>
                                <option value="Co-investigator">Co-investigator</option>
                              </Field>
                            </td>
                            <td>
                              <Field
                                type="text"
                                name={`projects[${index}].funding`}
                                className="w-full border px-2 py-1 rounded"
                              />
                            </td>
                            <td>
                              <Field
                                type="text"
                                name={`projects[${index}].amount`}
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
                        )
                      )}
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
                        setFieldValue("evidenceFileForProjects", file);
                      }}
                    />
                  </div> */}
                </div>
              </>
            )}
          </div>
        )}

        
      </FieldArray>

      <SectionFourTwo />
      <SectionFourThree />
      <SectionFourFour />
      <SectionFourFive />
      <SectionFourSix />
      <SectionFourSeven />
    </div>
  );
}
