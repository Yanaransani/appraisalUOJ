import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage, useFormikContext } from "formik";

export default function SecThreeFour() {
  const [isPeerReview, setIsPeerReview] = useState("");
  const [isStudenFB, setIsSyudentFB] = useState("");
  const { values, setFieldValue } = useFormikContext();

  return (
    <FieldArray name="evaluatuion">
      {({ push, remove }) => (
        <div>
          <p className="mt-1 mb-2 font-semibold">
            3.4 Evaluation of your own teaching
          </p>

          <fieldset className="mb-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <p className="font-medium mr-4">a. Peer review and feedback</p>

              {["Done", "not done"].map((title) => (
                <div className="flex items-center gap-x-2" key={title}>
                  <Field
                    type="radio"
                    name="peerReview"
                    value={title}
                    id={title}
                    checked={values.peerReview === title}
                    onChange={() => {
                      setFieldValue("peerReview", title);
                      setIsPeerReview(title);
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
              name="peerReview"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </fieldset>
          {isPeerReview === "Done" && (
            <div className="flex flex-wrap items-center gap-8 mb-4">
              {/* Date Obtained */}
              <div className="flex items-center gap-2">
                <label
                  htmlFor="dateObtained"
                  className="whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  Date Obtained:
                </label>
                <Field
                  name="dateObtained"
                  type="date"
                  id="dateObtained"
                  className="rounded-md px-3 py-1.5 border text-gray-900"
                />
                <ErrorMessage
                  name="dateObtained"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* <div className="flex items-center gap-2 flex-1">
                <p className="whitespace-nowrap text-sm font-medium text-gray-700">
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
                    setFieldValue("evidenceFileForPeerReview", file);
                  }}
                />
              </div> */}
            </div>
          )}

          <fieldset className="mb-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <p className="font-medium mr-4">b. Student feedback</p>

              {["Done", "not done"].map((title) => (
                <div className="flex items-center gap-x-2" key={title}>
                  <Field
                    type="radio"
                    name="stuFeedback"
                    value={title}
                    id={title}
                    checked={values.stuFeedback === title}
                    onChange={() => {
                      setFieldValue("stuFeedback", title);
                      setIsSyudentFB(title);
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
              name="stuFeedback"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </fieldset>
          {isStudenFB === "Done" && (
            <div className="flex flex-wrap items-center gap-8 mb-4">
              {/* Date Obtained */}
              <div className="flex items-center gap-2">
                <label
                  htmlFor="dateObtainedStu"
                  className="whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  Date Obtained:
                </label>
                <Field
                  name="dateObtainedStu"
                  type="date"
                  id="dateObtainedStu"
                  className="rounded-md px-3 py-1.5 border text-gray-900"
                />
                <ErrorMessage
                  name="dateObtainedStu"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* <div className="flex items-center gap-2 flex-1">
                <p className="whitespace-nowrap text-sm font-medium text-gray-700">
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
                    setFieldValue("evidenceFileForStuFB", file);
                  }}
                />
              </div> */}
            </div>
          )}
        </div>
      )}
    </FieldArray>
  );
}
