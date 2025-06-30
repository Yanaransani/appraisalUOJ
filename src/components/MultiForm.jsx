import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FaCirclePlus } from "react-icons/fa6";
import { FormValidationSchema } from ".././validation/FormValidation.jsx";
import { FaCircleMinus } from "react-icons/fa6";
import PersonalInfo from "./PersonalInfo";
import logo from "./logo.png";
import medLogo from "./medLogo.png";
import ReviewInfo from "./ReviewInfo";
import PartC from "./PartC";

export default function MultiForm() {
  const initialValues = {
    honorific: "",
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    employeeNumber: "",
    dob: "",
    department: "",
    designation: "",
    universityEmail: "",
    personalEmail: "",
    onLongLeave: "",
    periodUnderReview: "",
    objectives: [{ Objective: "" }],
    probationaryLecturer: "",
    degree: "",
    awardingInstitution: "",
    yearCompletion: "",
    inductionProgramme: "",
    details: "",
    teachingActivity: "",
    teachingActivities: [
      {
        subject: "",
        students: "",
        year: "",
        activity: "",
        hours: "",
      },
    ],
    evidenceFileForteachingAct: [],
    examinationsDetail: "",
    examinationsDetails: [
      {
        degreeProgramme: "",
        students: "",
        nameOfExam: "",
        accadamicYear: "",
        preparationExam: "",
        role: "",
      },
    ],
    evidenceFileForExamDetails: null,
    undergraduateResearchDetail: "",
    undergraduateResearchDetails: [
      {
        dProgramme: "",
        supervision: "",
        accYear: "",
        regNumber: "",
      },
    ],
    evidenceFileForUGResearchDetails: null,
    postgraduateResearchDetail: "",
    postgraduateResearchDetails: [
      {
        degreeProgramme: "",
        supervision: "",
        regNo: "",
      },
    ],
    evidenceFileForPostGResearch: null,
    inserviceTrainningDetail: "",
    inserviceTrainningDetails: [
      {
        degreeProgramme: "",
        supervision: "",
        regNo: "",
      },
    ],
    evidenceFileForInservice: null,
    peerReview: "",
    stuFeedback: "",
    dateObtained: "",
    dateObtainedStu: "",
    evidenceFileForPeerReview: null,
    evidenceFileForStuFB: null,
    newCourse: "",
    newCourses: [
      {
        courses: "",
        date: "",
        details: "",
      },
    ],
    evidenceFileForIntroCourse: null,
    curriculum: "",
    curriculums: [
      {
        courseProgram: "",
        date: "",
        details: "",
      },
    ],
    evidenceFileForCurriculum: null,
    laboratory: "",
    laboratories: [
      {
        material: "",
        details: "",
      },
    ],
    evidenceFileForLab: null,
    innovative: "",
    innovatives: [
      {
        accYear: "",
        approaches: "",
        details: "",
      },
    ],
    evidenceFileForInnovative: null,
    curReview: "",
    curReviews: [
      {
        review: "",
        details: "",
      },
    ],
    evidenceFileForReview: null,
    award: "",
    awards: [
      {
        honours: "",
        year: "",
        details: "",
      },
    ],
    evidenceFileForAwards: null,
    invitation: " ",
    invitations: [
      {
        nameIns: "",
        invitation: "",
        topic: "",
        hours: "",
      },
    ],
    evidenceFileForInvitation: null,
    project: "",
    projects: [
      {
        title: "",
        collaboration: "",
        role: "",
        funding: "",
        amount: "",
      },
    ],
    evidenceFileForProjects: null,
    presentation: "",
    presentations: [
      {
        title: "",
        preTitle: "",
        medium: "",
        date: "",
      },
    ],
    evidenceFileForPresentations: null,
    publication: "",
    publications: [
      {
        journal: "",
        title: "",
        doi: "",
        date: "",
        citation: "",
      },
    ],
    evidenceFileForJurnal: null,
    book: "",
    books: [
      {
        type: "",
        title: "",
        date: "",
        publisher: "",
      },
    ],
    evidenceFileForBooks: null,
    citation: "",
    citations: [
      {
        name: "",
        source: "",
        publised: "",
        link: "",
      },
    ],
    evidenceFileForCitations: null,
    meeting: "",
    meetings: [
      {
        type: "",
        title: "",
        date: "",
      },
    ],
    evidenceFileForMeetings: null,
    prize: "",
    prizes: [
      {
        honours: "",
        year: "",
        nameOfHonour: "",
        nameOfResearch: "",
        insitute: "",
      },
    ],
    evidenceFileForPrizes: null,
    dlResponsibility: "",
    dlResponsibilities: [
      {
        type: "",
        details: "",
        duration: "",
      },
    ],
    evidenceFileForDLProjects: null,
    flResponsibility: "",
    flResponsibilities: [
      {
        type: "",
        details: "",
        duration: "",
      },
    ],
    evidenceFileForFLProjects: null,
    ulResponsibility: "",
    uLResponsibilities: [
      {
        role: "",
        details: "",
        duration: "",
      },
    ],
    evidenceFileForULProjects: null,
    nLResponsibilitie: "",
    nLResponsibilities: [
      {
        role: "",
        details: "",
        duration: "",
      },
    ],
    evidenceFileForNLProjects: null,
    otherContribution: "",
    otherContributions: [
      {
        role: "",
        details: "",
        duration: "",
      },
    ],
    evidenceFileOtherContributions: null,
    professionalDevelopmentActivity: "",
    professionalDevelopmentActivities: [
      {
        activity: "",
        date: "",
        topic: "",
      },
    ],
    evidenceFileForPDActivity: null,
    attendingProDevActivity: "",
    attendingProDevActivities: [
      {
        activity: "",
        date: "",
        topic: "",
      },
    ],
    evidenceFileForAttendingPDActivity: null,
    educationalScholActivity: "",
    educationalScholActivities: [
      {
        activity: "",
        date: "",
        topic: "",
      },
    ],
    evidenceFileForEScholActivities: null,
    welfareActivity: "",
    welfareActivities: [
      {
        activity: "",
        date: "",
        topic: "",
      },
    ],
    evidenceFileForWelfareActivities: null,
    healthcareService: "",
    healthcareServices: [
      {
        service: "",
        details: "",
      },
    ],
    evidenceFileForHealthcare: [],
    clinicalService: "",
    clinicalServices: [
      {
        clinical: "",
        details: "",
      },
    ],
    evidenceFileForClinicalServices: [],
    speTechnology: "",
    speTechnologies: [
      {
        centre: "",
        details: "",
      },
    ],
    evidenceFileForSpeTechnologies: null,
    referralPathway: "",
    referralPathways: [
      {
        centre: "",
        details: "",
      },
    ],
    evidenceFileForReferralPathways: null,
    serviceCollaborative: "",
    serviceCollaboratives: [
      {
        clinicalService: "",
        details: "",
      },
    ],
    evidenceFileForServiceCollaboratives: null,
    researchCapacity: "",
    researchCapacities: [
      {
        title: "",
        details: "",
      },
    ],
    evidenceFileForResearchCapacities: null,
    iPFill: "",
    iP: [
      {
        item: "",
        details: "",
      },
    ],
    evidenceFileForIP: null,
    uBLActivity: "",
    uBLActivities: [
      {
        activity: "",
        details: "",
      },
    ],
    evidenceFileForUBLActivities: null,
    commercialisation: "",
    commercialisations: [
      {
        name: "",
        details: "",
      },
    ],
    evidenceFileForCommercialisations: null,
    training: "",
    trainings: [
      {
        name: "",
        details: "",
      },
    ],
    evidenceFileFortrainings: null,
    multifunctionalResearch: "",
    multifunctionalResearches: [
      {
        name: "",
        details: "",
      },
    ],
    evidenceFileFormultifunctionalResearches: null,
    reflection: "",
    categories: [
      {
        categoryName: "",
        items: [{ name: "", value: "" }],
      },
    ],
  };

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formValues) => {
    try {
      setLoading(true);
      const formData = new FormData();

      // Extract all non-file fields into JSON
      const dataWithoutFiles = Object.fromEntries(
        Object.entries(formValues).filter(
          ([key]) => !key.startsWith("evidenceFile")
        )
      );

      console.log("Form values without files:", dataWithoutFiles); //  Add here

      formData.append("data", JSON.stringify(dataWithoutFiles));

      // Append file manually
      if (
        window.teachingEvidenceInput &&
        window.teachingEvidenceInput.files.length > 0
      ) {
        console.log("Uploaded files:", window.teachingEvidenceInput.files); //  Log files

        Array.from(window.teachingEvidenceInput.files).forEach(
          (file, index) => {
            // formData.append(`evidenceFileForteachingAct_${index}`, file);
            formData.append("evidenceFileForteachingAct", file);
          }
        );
      } else {
        console.log("No teaching evidence files selected.");
      }

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyc0OMOLlekhZxhW7I18BVs97mhyhRCy65y3woKFgdsyb6cKfCy-7WIume9nIjOEqaN/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.text();
      // alert(result);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <img
          src={logo}
          alt="logo"
          className="w-24 h-24 rounded-full object-cover"
        />

        <div className="text-center flex-1">
          <h3 className="text-xl font-bold leading-snug">
            ANNUAL APPRAISAL OF ACADEMIC STAFF PERFORMANCE AND ACHIEVEMENTS
          </h3>
          <h3 className="text-xl font-bold leading-snug">
            FACULTY OF MEDICINE,
          </h3>
          <h3 className="text-xl font-bold leading-snug">
            UNIVERSITY OF JAFFNA
          </h3>
          <h5 className="text-sm mt-2 italic">
            (To be completed at the end of each calendar year)
          </h5>
        </div>

        <img
          src={medLogo}
          alt="medlogo"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      <div className="border border-red-500 bg-yellow-100 text-sm text-black p-4 rounded mb-6">
        <p className="mb-2 font-semibold">Instructions:</p>
        <p className="mb-2 font-semibold">This form is in Three parts:</p>
        <ul className="list-disc pl-5 mb-2">
          <li>Part A: Personal information</li>
          <li>
            Part B: Record your performance and achievements over the past year
          </li>
          <li>Part C: Identify your objectives for the year ahead</li>
        </ul>
        <p className="mb-2">
          For each question, select ‘Fill’ to access the relevant table or
          question.
        </p>
        <p className="mb-2">
          If a question does not apply, select ‘N/A' (Not Applicable).
        </p>
        <p className="mb-2">
          To add rows for additional information, click the{" "}
          <FaCirclePlus className="inline text-green-400" /> button; to remove a
          row, use the <FaCircleMinus className="inline text-red-400" /> button.
        </p>
        <p>
          If the provided options are not suitable, please write your most
          appropriate response in the respective space.
        </p>
      </div>
      {loading ? (
        <div className="text-blue-500 font-semibold text-lg text-center">
          Submitting form, please wait...
        </div>
      ) : submitted ? (
        <h2 className="text-green-600 font-bold text-xl">
          Form Submitted Successfully!
        </h2>
      ) : (
        <Formik
          initialValues={initialValues}
          // validationSchema={FormValidationSchema}
          onSubmit={handleSubmit}
          // onSubmit={(values) => {
          //   console.log("Submitted Values:", values);
          // }}
          
        >
          {({ values }) => (
            <Form>
              <h4 className="font-bold">Part A: PERSONAL INFORMATION</h4>
              <PersonalInfo />

              <h4 className="font-bold">Part B: REVIEW OF PAST YEAR</h4>
              <ReviewInfo />

              <h4 className="font-bold">
                Part C: OBJECTIVES FOR THE YEAR AHEAD
              </h4>
              <PartC />

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  Submit
                </button>
              </div>

              {/* Debug: to see the current form state */}
              {/* <pre className="text-xs text-gray-500 mt-4 bg-gray-50 p-2 rounded overflow-x-auto">
                {JSON.stringify(values, null, 2)}
              </pre> */}
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
