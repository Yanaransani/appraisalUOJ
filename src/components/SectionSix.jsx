import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import SectionSixThree from "./SectionSixThree";
import SectionSixFour from "./SectionSixFour";
import SectionSixFive from "./SectionSixFive";
import SectionSixSix from "./SectionSixSix";
import SectionSixSeven from "./SectionSixSeven";
import SectionSixEight from "./SectionSixEight";
import SectionSixNine from "./SectionSicNine";

export default function SectionSix() {
  const { values, setFieldValue } = useFormikContext();
  const [isDelivery, setIsDelivery] = useState("");
  const [isClinical, setIsClinical] = useState("");

  return (
    <div>
      <div className="flex items-center gap-4 mb-2">
        <h5 className="font-bold">Section 06:</h5>
        <p className="mt-1 mb-2 font-bold">
          Health care services and Training & Development of Regional and
          National Health Services.
        </p>
      </div>

      {/* ========== HEALTHCARE SERVICES ========== */}
      <FieldArray name="healthcareServices">
        {({ push, remove }) => (
          <>
            <fieldset className="mb-4">
              <div className="flex items-center gap-4">
                <p className="mt-1 mb-2 font-medium">
                  6.1 Delivery of health care services
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {["Fill", "N/A"].map((title) => (
                    <div className="flex items-center gap-x-2" key={title}>
                      <Field
                        type="radio"
                        name="healthcareService"
                        value={title}
                        id={`healthcareService-${title}`}
                        checked={values.healthcareService === title}
                        onChange={() => {
                          setFieldValue("healthcareService", title);
                          setIsDelivery(title);
                        }}
                      />
                      <label
                        htmlFor={`healthcareService-${title}`}
                        className="text-sm font-medium text-gray-900"
                      >
                        {title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <ErrorMessage
                name="healthcareService"
                component="div"
                className="text-red-500 text-sm"
              />
            </fieldset>

            {isDelivery === "Fill" && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                      <th className="px-4 py-2 border">SrNo.</th>
                      <th className="px-4 py-2 border">Health care services</th>
                      <th className="px-4 py-2 border">Details</th>
                      <th className="px-4 py-2 border text-center">
                        Add Row{" "}
                        <button
                          type="button"
                          onClick={() =>
                            push({ service: "", details: "" })
                          }
                          className="text-green-600 hover:text-green-800"
                        >
                          <FaCirclePlus />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {values.healthcareServices.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border text-center">
                          {index + 1}
                        </td>
                        <td>
                          <Field
                            type="text"
                            name={`healthcareServices[${index}].service`}
                            className="w-full border px-2 py-1 rounded"
                          />
                        </td>
                        <td>
                          <Field
                            type="text"
                            name={`healthcareServices[${index}].details`}
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
                      setFieldValue("evidenceFileForHealthcare", file);
                    }}
                  />
                </div> */}
              </div>
            )}
          </>
        )}
      </FieldArray>

      {/* ========== CLINICAL SERVICES ========== */}
      <FieldArray name="clinicalServices">
        {({ push, remove }) => (
          <>
            <fieldset className="mb-4">
              <div className="flex items-center gap-4">
                <p className="mt-1 mb-2 font-medium">6.2 Clinical services</p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {["Fill", "N/A"].map((title) => (
                    <div className="flex items-center gap-x-2" key={title}>
                      <Field
                        type="radio"
                        name="clinicalService"
                        value={title}
                        id={`clinicalService-${title}`}
                        checked={values.clinicalService === title}
                        onChange={() => {
                          setFieldValue("clinicalService", title);
                          setIsClinical(title);
                        }}
                      />
                      <label
                        htmlFor={`clinicalService-${title}`}
                        className="text-sm font-medium text-gray-900"
                      >
                        {title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <ErrorMessage
                name="clinicalService"
                component="div"
                className="text-red-500 text-sm"
              />
            </fieldset>

            {isClinical === "Fill" && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                      <th className="px-4 py-2 border">SrNo.</th>
                      <th className="px-4 py-2 border">
                        Kind of the Clinical outreach services
                      </th>
                      <th className="px-4 py-2 border">Details</th>
                      <th className="px-4 py-2 border text-center">
                        Add Row{" "}
                        <button
                          type="button"
                          onClick={() =>
                            push({ clinical: "", details: "" })
                          }
                          className="text-green-600 hover:text-green-800"
                        >
                          <FaCirclePlus />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {values.clinicalServices.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border text-center">
                          {index + 1}
                        </td>
                        <td>
                          <Field
                            type="text"
                            name={`clinicalServices[${index}].clinical`}
                            className="w-full border px-2 py-1 rounded"
                          />
                        </td>
                        <td>
                          <Field
                            type="text"
                            name={`clinicalServices[${index}].details`}
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
                      setFieldValue("evidenceFileForClinicalServices", file);
                    }}
                  />
                </div> */}
              </div>
            )}
          </>
        )}
      </FieldArray>

      {/* Other sections */}
      <SectionSixThree />
      <SectionSixFour />
      <SectionSixFive />
      <SectionSixSix />
      <SectionSixSeven />
      <SectionSixEight />
      <SectionSixNine />
    </div>
  );
}
