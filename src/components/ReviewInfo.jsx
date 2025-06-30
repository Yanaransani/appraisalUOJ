import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import SectionThree from "./SectionThree";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";

export default function ReviewInfo() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-2">
        <h5 className="font-bold">Section 01:</h5>
        <p className="font-bold">To be completed by all academic staff</p>
      </div>

      <br />

      <div className="flex items-center gap-4 mb-4">
        <label
          htmlFor="periodUnderReview"
          className="w-50 text-sm font-medium text-gray-900"
        >
          1.1 Period under review:
        </label>
        <Field
          as="select"
          name="periodUnderReview"
          id="periodUnderReview"
          className="flex-1 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        >
          <option value="">Choose a year</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
        </Field>
        <ErrorMessage
          name="periodUnderReview"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>

      <div>
        <SectionOne />
      </div>
      <div>
        <SectionTwo />
      </div>
      <div className="mt-8">
        <SectionThree />
      </div>
      <div className="mt-8">
        <SectionFour />
      </div>
      <div className="mt-8">
        <SectionFive />
      </div>
      <div className="mt-8">
        <SectionSix />
      </div>
      <div className="mt-8">
        <SectionSeven />
      </div>
    </div>
  );
}
