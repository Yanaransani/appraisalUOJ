import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";

export default function SectionTwo() {
  const [isProbationary, setIsProbationary] = useState("");
  const [isComplete, setIsComplete] = useState("");
  const { values, setFieldValue } = useFormikContext();

  return (
    <div>
      <div className="flex items-center gap-4 mb-2">
        <h5 className="font-bold">Section 02:</h5>
        <p className="mt-1 mb-2 font-bold">
          Postgraduate studies (must be completed by probationary lecturers)
        </p>
      </div>
       
        <fieldset className="mb-4">
          <div className="flex items-center gap-4">
            <p className="w-50 text-sm font-medium text-gray-900">
              Are you a probationary lecturer:
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {["Yes", "No"].map((title) => (
                <div className="flex items-center gap-x-2" key={title}>
                  <Field
                    type="radio"
                    name="probationaryLecturer"
                    value={title}
                    checked={values.probationaryLecturer === title}
                    onChange={() => {
                      setFieldValue("probationaryLecturer", title);
                      setIsProbationary(title);
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
            name="probationaryLecturer"
            component="div"
            className="text-red-500 text-sm"
          />
        </fieldset>

        {isProbationary === "Yes" && (
          <>
            <p className="text-sm font-medium text-gray-900 mb-4 mt-6">
              2.1 Current registration for postgraduate qualifications
            </p>
            <div className="flex items-center gap-4 mb-4">
              <label
                htmlFor="degree"
                className="w-50 text-sm font-medium text-gray-900"
              >
                a. Name of degree:
              </label>
              <Field
                as="select"
                name="degree"
                id="degree"
                className="flex-1 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              >
                <option value="">Choose a degree</option>
                <option value="Bachelor of Medicine">
                  Bachelor of Medicine, Bachelor of Surgery
                </option>
                <option value="Bachelor of Veterinary Science">
                  Bachelor of Veterinary Science (BVSc)
                </option>
                <option value="Bachelor of Medical Laboratory Science Honours">
                  Bachelor of Medical Laboratory Science Honours
                </option>
              </Field>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label
                htmlFor="awardingInstitution"
                className="w-50 text-sm font-medium text-gray-900"
              >
                b. Awarding institution:
              </label>
              <Field
                as="select"
                name="awardingInstitution"
                id="awardingInstitution"
                className="flex-1 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              >
                <option value="">Choose an institution</option>
                <option value="University of Colombo">
                  University of Colombo
                </option>
                <option value="University of Peradeniya">
                  University of Peradeniya
                </option>
                <option value="University of Sri Jeyawaethanapura">
                  University of Sri Jeyawaethanapura
                </option>
                <option value="University of Kelaniya">
                  University of Kelaniya
                </option>
                <option value="University of Moratuwa">
                  University of Moratuwa
                </option>
                <option value="University of Jaffna">
                  University of Jaffna
                </option>
                <option value="The Open University">
                  The Open University of Sri Lanka
                </option>
                <option value="Eastern University">
                  Eastern University, Sri Lanka
                </option>
              </Field>

              <ErrorMessage
                name="awardingInstitution"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label
                htmlFor="yearCompletion"
                className="w-50 text-sm font-medium text-gray-900"
              >
                C. Year of 1st registration and expected year of completion:
              </label>
              <Field
                name="yearCompletion"
                type="text"
                className="flex-1 rounded-md px-3 py-1.5 border text-gray-900"
              />
              <ErrorMessage
                name="yearCompletion"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <fieldset className="mb-4">
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-900 mb-4">
                  2.2 Induction Programme for probationary academic staff
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4">
                  {["To be done", "Completed"].map((title) => (
                    <div className="flex items-center gap-x-2" key={title}>
                      <Field
                        type="radio"
                        name="inductionProgramme"
                        value={title}
                        checked={values.inductionProgramme === title}
                        onChange={() => {
                          setFieldValue("inductionProgramme", title);
                          setIsComplete(title);
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
                name="inductionProgramme"
                component="div"
                className="text-red-500 text-sm"
              />
            </fieldset>

            <br />
            {isComplete === "Completed" && (
              <div className="flex items-start gap-4 mb-4">
                <label
                  htmlFor="details"
                  className="w-32 text-sm font-medium text-gray-900 pt-2"
                >
                  Give details:
                </label>
                <Field
                  as="textarea"
                  name="details"
                  id="details"
                  rows="5"
                  className="flex-1 rounded-md bg-white px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm resize-y"
                  placeholder="Type your details here..."
                />
                <ErrorMessage
                  name="details"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            )}
          </>
        )}

    </div>
  );
}
