import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage, useFormikContext } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SectionThreeTen() {
  const [isAward, setIsAward] = useState("");
  const [isInvitations, setIsInvitations] = useState("");
  const { values, setFieldValue } = useFormikContext();

  return (
    <>
      {/* ====== Awards Section ====== */}
      <FieldArray name="awards">
        {({ push, remove }) => (
          <div>
            <p className="mt-1 mb-2 font-semibold">
              3.10 Evidence of teaching quality and impact
            </p>

            <fieldset className="mb-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="font-medium mr-4">
                  a. Awards and prizes (provide details)
                </p>

                {["Fill", "N/A"].map((title) => (
                  <div className="flex items-center gap-x-2" key={title}>
                    <Field
                      type="radio"
                      name="award"
                      value={title}
                      id={title}
                      checked={values.award === title}
                      onChange={() => {
                        setFieldValue("award", title);
                        setIsAward(title);
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
              <ErrorMessage
                name="award"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </fieldset>

            {isAward === "Fill" && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                      <th className="px-4 py-2 border">SrNo.</th>
                      <th className="px-4 py-2 border">honours</th>
                      <th className="px-4 py-2 border">Year</th>
                      <th className="px-4 py-2 border">Details</th>
                      <th className="px-4 py-2 border text-center">
                        Add Row{" "}
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              honours: "",
                              year: "",
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
                    {values.awards.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border text-center">
                          {index + 1}
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            as="select"
                            name={`awards[${index}].honours`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose honours</option>
                            <option value="Awards">Awards</option>
                            <option value="Prizes">Prizes</option>
                            <option value="Recognition">Recognition</option>
                          </Field>
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            type="date"
                            name={`awards[${index}].year`}
                            className="w-full rounded-md"
                          />
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            type="text"
                            name={`awards[${index}].details`}
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
                    className="flex-1 text-sm text-gray-700
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                    onChange={(e) => {
                      const file = e.currentTarget.files[0];
                      setFieldValue("evidenceFileForAwards", file);
                    }}
                  />
                </div> */}
              </div>
            )}
          </div>
        )}
      </FieldArray>

      {/* ====== Invitations Section ====== */}
      <FieldArray name="invitations">
        {({ push, remove }) => (
          <>
            <fieldset className="mb-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="font-medium mr-4">
                  b. Invitations to lecture / speak at other institutions
                </p>

                {["Fill", "N/A"].map((title) => (
                  <div className="flex items-center gap-x-2" key={title}>
                    <Field
                      type="radio"
                      name="invitation"
                      value={title}
                      id={title}
                      checked={values.invitation === title}
                      onChange={() => {
                        setFieldValue("invitation", title);
                        setIsInvitations(title);
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
              <ErrorMessage
                name="invitation"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </fieldset>

            {isInvitations === "Fill" && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                      <th className="px-4 py-2 border">SrNo.</th>
                      <th className="px-4 py-2 border">
                        Name of the institution
                      </th>
                      <th className="px-4 py-2 border">Invitation</th>
                      <th className="px-4 py-2 border">Topic of the lecture</th>
                      <th className="px-4 py-2 border">Number of hours</th>
                      <th className="px-4 py-2 border text-center">
                        Add Row{" "}
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              nameIns: "",
                              invitation: "",
                              topic: "",
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
                    {values.invitations.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border text-center">
                          {index + 1}
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            type="text"
                            name={`invitations[${index}].nameIns`}
                            className="w-full rounded-md"
                          />
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            as="select"
                            name={`invitations[${index}].invitation`}
                            className="w-full rounded-md"
                          >
                            <option value="">Choose invitation</option>
                            <option value="Lecturer">Lecturer</option>
                            <option value="Adjacent prof">Adjacent prof</option>
                            <option value="Expert">Expert</option>
                            <option value="Consultant">Consultant</option>
                          </Field>
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            type="text"
                            name={`invitations[${index}].topic`}
                            className="w-full rounded-md"
                          />
                        </td>
                        <td className="px-2 py-2 border">
                          <Field
                            type="text"
                            name={`invitations[${index}].hours`}
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
                    className="flex-1 text-sm text-gray-700
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                    onChange={(e) => {
                      const file = e.currentTarget.files[0];
                      setFieldValue("evidenceFileForInvitation", file);
                    }}
                  />
                </div> */}
              </div>
            )}
          </>
        )}
      </FieldArray>
    </>
  );
}
