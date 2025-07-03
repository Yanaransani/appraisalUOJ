import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage } from "formik";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function SectionOneFormik() {
  return (
    <FieldArray name="objectives">
      {({ push, remove, form }) => (
        <div>
          <p className="text-sm font-medium text-gray-900 mb-4">
            1.2 Objectives for the year (to be extracted from Part C of previous year's annual appraisal)
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                  <th className="px-4 py-2 border">SrNo.</th>
                  <th className="px-4 py-2 border">Objective</th>
                  <th className="px-4 py-2 border text-center">
                    Add Row{" "}
                    <button
                      type="button"
                      onClick={() => push({ Objective: "" })}
                      className="text-green-600 hover:text-green-800"
                    >
                      <FaCirclePlus />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {form.values.objectives.map((obj, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border text-center">{index + 1}</td>
                    <td className="px-4 py-2 border">
                      <Field
                        name={`objectives[${index}].objective`}
                        type="text"
                        className="w-full border px-2 py-1 rounded"
                      />
                      <ErrorMessage
                        name="objectives"
                        component="div"
                        className="text-red-500 text-sm"
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
          </div>
          <br />
        </div>
      )}
    </FieldArray>
  );
}

