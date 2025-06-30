import * as Yup from "yup";

export const FormValidationSchema = Yup.object().shape({
  honorific: Yup.string().required("Honorific is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  gender: Yup.string().required("Gender is required"),
  employeeNumber: Yup.string().required("Employee number is required"),
  dob: Yup.string().required("Date of birth is required"),
  department: Yup.string().required("Department is required"),
  designation: Yup.string().required("Designation is required"),
  universityEmail: Yup.string()
    .email("Invalid email")
    .required("University email is required"),
  personalEmail: Yup.string()
    .email("Invalid email")
    .required("Personal Email required"),
  onLongLeave: Yup.string().required("Leave status is required"),
  periodUnderReview: Yup.string().required("Period is required"),
  probationaryLecturer: Yup.string().required("Field is required"),
  examinationsDetail: Yup.string().required("Examinations Detail is required"),
  undergraduateResearchDetail: Yup.string().required(
    "Undergraduate Research Detail is required"
  ),
  postgraduateResearchDetail: Yup.string().required(
    "Postgraduate Research Detail is required"
  ),
  inserviceTrainningDetail: Yup.string().required(
    "Inservice Trainning Detail is required"
  ),
  peerReview: Yup.string().required("Peer Review is required"),
  stuFeedback: Yup.string().required("Student Feedback is required"),
  newCourse: Yup.string().required("Field is required"),
  curriculum: Yup.string().required("Field is required"),
  laboratory: Yup.string().required("Field is required"),
  innovative: Yup.string().required("Field is required"),
  curReview: Yup.string().required("Field is required"),
  award: Yup.string().required("Field is required"),
  project: Yup.string().required("Field is required"),
  presentation: Yup.string().required("Field is required"),
  publication: Yup.string().required("Field is required"),
  book: Yup.string().required("Field is required"),
  citation: Yup.string().required("Field is required"),
  meeting: Yup.string().required("Field is required"),
  prize: Yup.string().required("Field is required"),
  dlResponsibility: Yup.string().required("Field is required"),
  flResponsibility: Yup.string().required("Field is required"),
  ulResponsibility: Yup.string().required("Field is required"),
  nLResponsibilitie: Yup.string().required("Field is required"),
  otherContribution: Yup.string().required("Field is required"),
  professionalDevelopmentActivity: Yup.string().required("Field is required"),
  attendingProDevActivity: Yup.string().required("Field is required"),
  educationalScholActivity: Yup.string().required("Field is required"),
  welfareActivity: Yup.string().required("Field is required"),
  healthcareService: Yup.string().required("Field is required"),
  clinicalService: Yup.string().required("Field is required"),
  speTechnology: Yup.string().required("Field is required"),
  referralPathway: Yup.string().required("Field is required"),
  serviceCollaborative: Yup.string().required("Field is required"),
  researchCapacity: Yup.string().required("Field is required"),
  iPFill: Yup.string().required("Field is required"),
  uBLActivity: Yup.string().required("Field is required"),
  commercialisation: Yup.string().required("Field is required"),
  training: Yup.string().required("Field is required"),
  multifunctionalResearch: Yup.string().required("Field is required"),
  reflection: Yup.string().required("Reflection is required"),
});
