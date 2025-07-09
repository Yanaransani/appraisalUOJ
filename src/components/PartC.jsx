import React from "react";
import { Field, ErrorMessage } from "formik";

export default function PartC() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-2 mb-4">
        <label
          htmlFor="reflection"
          className="text-sm font-medium text-gray-900"
        >
          Reflection on performance and plans for the next year based on your
          evaluation
        </label>
        <Field
          as="textarea"
          name="reflection"
          id="reflection"
          rows={5}
          className="rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        />
        <ErrorMessage
          name="reflection"
          component="div"
          className="text-red-600 text-sm"
        />
        <br />
        <label
          htmlFor="driveLink"
          className="text-sm font-medium text-gray-900"
        >
          Google Drive Link to All Evidence Files
        </label>
        <Field
          type="url"
          name="driveLink"
          id="driveLink"
          placeholder="https://drive.google.com/..."
          className="rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        />
        <ErrorMessage
          name="driveLink"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>
    </div>
  );
}
