import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage, useFormikContext } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SecThreeTwo() {
  const [isTeachActivity, setIsTeachActivity] = useState("");
  const { values, setFieldValue } = useFormikContext();

  return (
    <FieldArray name="examinationsDetails">
      {({ push, remove }) => (
        <div>
          <fieldset className="mb-4">
            <div className="flex items-center gap-4">
              <p className="mt-1 mb-2 font-medium">
                3.2 Examinations (provide details in relevant cell) -{" "}
                <b>Please see </b> Annex 2
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Fill", "N/A"].map((title) => (
                  <div className="flex items-center gap-x-2" key={title}>
                    <Field
                      type="radio"
                      name="examinationsDetail"
                      value={title}
                      id={title}
                      checked={values.examinationsDetail === title}
                      onChange={() => {
                        setFieldValue("examinationsDetail", title);
                        setIsTeachActivity(title);
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
              name="examinationsDetail"
              component="div"
              className="text-red-500 text-sm"
            />
          </fieldset>
          {isTeachActivity === "Fill" && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                      <th className="px-4 py-2 border">SrNo.</th>
                      <th className="px-4 py-2 border">Degree Programme</th>
                      <th className="px-4 py-2 border">Students</th>
                      <th className="px-4 py-2 border">Name of the Exam</th>
                      <th className="px-4 py-2 border">Accadamic year</th>
                      <th className="px-4 py-2 border">Preparation of Exam</th>
                      <th className="px-4 py-2 border">Role</th>
                      <th className="px-4 py-2 border text-center">
                        Add Row{" "}
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              degreeProgramme: "",
                              students: "",
                              nameOfExam: "",
                              accadamicYear: "",
                              preparationExam: "",
                              role: "",
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
                    {values.examinationsDetails.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border text-center">
                          {index + 1}
                        </td>
                        <td>
                          <Field
                            as="select"
                            name={`examinationsDetails[${index}].degreeProgramme`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose a Degree programme</option>
                            <option value="MBBS">MBBS</option>
                            <option value="others">Others</option>
                          </Field>
                        </td>
                        <td>
                          <Field
                            as="select"
                            name={`examinationsDetails[${index}].students`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose a Students group</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="postgraduate">Postgraduate</option>
                          </Field>
                        </td>
                        <td>
                          <Field
                            as="select"
                            name={`examinationsDetails[${index}].nameOfExam`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose a Exam</option>
                            <option value="In-course">In-course</option>
                            <option value="Phase 1">Phase 1</option>
                            <option value="Phase 2">Phase 2</option>
                            <option value="Final Exam">Final Exam</option>
                          </Field>
                        </td>
                        <td>
                          <Field
                            as="select"
                            name={`examinationsDetails[${index}].accadamicYear`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose a accadamic year</option>
                            <option value="2019/20">2019/20</option>
                            <option value="2020/21">2020/21</option>
                            <option value="2021/22">2021/22</option>
                            <option value="2022/23">2022/23</option>
                            <option value="2023/24">2023/24</option>
                            <option value="2024/25">2024/25</option>
                            <option value="2025/26">2025/26</option>
                            <option value="2027/28">2027/28</option>
                          </Field>
                        </td>
                        <td>
                          <Field
                            as="select"
                            name={`examinationsDetails[${index}].preparationExam`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose a preparation type</option>
                            <option value="Essay">Essay</option>
                            <option value="Long case">Long case</option>
                            <option value="MCQ">MCQ</option>
                            <option value="OSCE">OSCE</option>
                            <option value="OSPE">OSPE</option>
                            <option value="Practical">Practical</option>
                            <option value="SEQ">SEQ</option>
                            <option value="Short case">Short case</option>
                            <option value="Sports">Sports</option>
                            <option value="Viva">Viva</option>
                            <option value="SRQ">SRQ</option>
                          </Field>
                        </td>
                        <td>
                          <Field
                            as="select"
                            name={`examinationsDetails[${index}].role`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose a Role</option>
                            <option value="Supervision">Supervision</option>
                            <option value="Invigilation">Invigilation</option>
                            <option value="Chief Examiner">
                              Chief Examiner
                            </option>
                            <option value="Coordinator">Coordinator</option>
                            <option value="Setter">Setter</option>
                            <option value="Moderator">Moderator</option>
                            <option value="First Marking">First Marking</option>
                            <option value="Second Marking">Second Marking</option>
                          </Field>
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
              </div>
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
                    setFieldValue("evidenceFileForExamDetails", file); // ⬅️ store the file in Formik
                  }}
                />
              </div>
            </>
          )}
        </div>
      )}
    </FieldArray>
  );
}
