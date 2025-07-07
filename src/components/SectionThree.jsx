import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage, useFormikContext } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import SecThreeTwo from "./SecThreeTwo";
import SecThreeThreeA from "./SecThreeThreeA";
import SecThreeThreeB from "./SecThreeThreeB";
import SecThreeThreeC from "./SecThreeThreeC";
import SecThreeFour from "./SecThreeFour";
import SectionThreeFive from "./SecThreeFive";
import SectionThreeSix from "./SecThreeSix";
import SectionThreeSeven from "./SecThreeSeven";
import SectionThreeEight from "./SectionThreeEight";
import SectionThreeNine from "./ScetionThreeNine";
import SectionThreeTen from "./SectionThreeTen";

export default function SectionThree() {
  const { values, setFieldValue } = useFormikContext();
  const [isTeachActivity, setIsTeachActivity] = useState("");

  return (
    <FieldArray name="teachingActivities">
      {({ push, remove }) => (
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h5 className="font-bold">Section 03:</h5>
            <p className="mt-1 mb-2 font-bold">
              Teaching, course preparation and examining students <br /> (to be
              completed by all staff members who are not on long leave)
            </p>
          </div>

          <fieldset className="mb-4">
            <div className="flex items-center gap-4">
              <p className="mt-1 mb-2 font-medium">
                3.1 Teaching activities conducted during the year (number of
                classes)
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Fill", "N/A"].map((title) => (
                  <div className="flex items-center gap-x-2" key={title}>
                    <Field
                      type="radio"
                      name="teachingActivity"
                      value={title}
                      id={title}
                      checked={values.teachingActivity === title}
                      onChange={() => {
                        setFieldValue("teachingActivity", title);
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
              name="teachingActivity"
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
                      <th className="px-4 py-2 border">Subjects</th>
                      <th className="px-4 py-2 border">Students</th>
                      <th className="px-4 py-2 border">Academic Year</th>
                      <th className="px-4 py-2 border">Teaching Activity</th>
                      <th className="px-4 py-2 border">No. of Hours</th>
                      <th className="px-4 py-2 border text-center">
                        Add Row{" "}
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              subject: "",
                              students: "",
                              year: "",
                              activity: "",
                              hours: "",
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
                    {values.teachingActivities.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border text-center">
                          {index + 1}
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            as="select"
                            name={`teachingActivities[${index}].subject`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose a Subject</option>
                            <option value="Degree Programme">
                              Degree Programme
                            </option>
                            <option value="Course Unit">Course Unit</option>
                            <option value="Clinical Appointment">
                              Clinical Appointment
                            </option>
                          </Field>
                          <ErrorMessage
                            name={`teachingActivities[${index}].subject`}
                            component="div"
                            className="text-red-500 text-xs"
                          />
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            as="select"
                            name={`teachingActivities[${index}].students`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose a Student group</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Postgraduate">Postgraduate</option>
                          </Field>
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            as="select"
                            name={`teachingActivities[${index}].year`}
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
                            name={`teachingActivities[${index}].activity`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose an Activity</option>
                            <option value="Any Other Specify">
                              Any Other Specify
                            </option>
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
                            type="number"
                            name={`teachingActivities[${index}].hours`}
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
                    accept=".pdf,image/*"
                    name="evidenceFileForteachingAct"
                    multiple
                    ref={(el) => (window.teachingEvidenceInput = el)}
                    className="file-input"
                    onChange={(e) => {
                      const files = Array.from(e.currentTarget.files); // convert FileList to array
                      setFieldValue("evidenceFileForteachingAct", files); // store array in Formik
                    }}
                  />
                </div> */}
              </div>
            </>
          )}

          {/* Subsections */}
          <SecThreeTwo />
          <SecThreeThreeA />
          <SecThreeThreeB />
          <SecThreeThreeC />
          <SecThreeFour />
          <SectionThreeFive />
          <SectionThreeSix />
          <SectionThreeSeven />
          <SectionThreeEight />
          <SectionThreeNine />
          <SectionThreeTen />
        </div>
      )}
    </FieldArray>
  );
}
