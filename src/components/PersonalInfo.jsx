import { Field, ErrorMessage } from "formik";

export default function MultiInfo() {
  return (
    <div className="p-6">
      <fieldset className="mb-4">
        <div className="flex items-center gap-4">
          <p className="mt-1 mb-2 font-medium">Honorifics:</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {["Prof.", "Dr.", "Mr.", "Mrs.", "Miss.", "Rev."].map((title) => (
              <div className="flex items-center gap-x-2" key={title}>
                <Field type="radio" name="honorific" value={title} id={title} />
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
          name="honorific"
          component="div"
          className="text-red-500 text-sm"
        />
      </fieldset>

      <br />
      <div className="flex items-center gap-4 mb-4">
        <label
          htmlFor="firstName"
          className="w-32 text-sm font-medium text-gray-900"
        >
          First Name:
        </label>
        <Field
          name="firstName"
          type="text"
          className="flex-1 rounded-md px-3 py-1.5 border text-gray-900"
        />
        <ErrorMessage
          name="firstName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="flex items-center gap-4 mb-4">
        <label
          htmlFor="lastName"
          className="w-32 text-sm font-medium text-gray-900"
        >
          Last Name:
        </label>
        <Field
          name="lastName"
          type="text"
          className="flex-1 rounded-md px-3 py-1.5 border text-gray-900"
        />
        <ErrorMessage
          name="lastName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <label
          htmlFor="middleName"
          className="w-32 text-sm font-medium text-gray-900"
        >
          Middle Name:
        </label>
        <Field
          name="middleName"
          type="text"
          className="flex-1 rounded-md px-3 py-1.5 border text-gray-900"
        />
        <ErrorMessage
          name="middleName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <fieldset className="mb-4">
        <div className="flex items-center gap-4">
          <p className="w-32 text-sm font-medium text-gray-900">Gender:</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {["Male", "Female"].map((title) => (
              <div className="flex items-center gap-x-2" key={title}>
                <Field type="radio" name="gender" value={title} id={title} />
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
          name="gender"
          component="div"
          className="text-red-500 text-sm"
        />
      </fieldset>

      <div className="flex items-center gap-4 mb-4">
        <label
          htmlFor="employeeNumber"
          className="w-32 text-sm font-medium text-gray-900"
        >
          Employee Number:
        </label>
        <Field
          name="employeeNumber"
          type="text"
          className="flex-1 rounded-md px-3 py-1.5 border text-gray-900"
        />
        <ErrorMessage
          name="employeeNumber"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="dob" className="w-32 text-sm font-medium text-gray-900">
          Date of Birth:
        </label>
        <Field
          name="dob"
          type="date"
          id="dob"
          className="flex-1 rounded-md px-3 py-1.5 border text-gray-900"
        />
      </div>
      <ErrorMessage
        name="dob"
        component="div"
        className="text-red-500 text-sm ml-32 -mt-3"
      />

      <div className="flex items-center gap-4 mb-4">
        <label
          htmlFor="department"
          className="w-32 text-sm font-medium text-gray-900"
        >
          Department:
        </label>

        <Field
          as="select"
          name="department"
          id="department"
          className="flex-1 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        >
          <option value="">Choose a department</option>
          <option value="Department of Anatomy">Department of Anatomy</option>
          <option value="Department of Biochemistry">
            Department of Biochemistry
          </option>
          <option value="Department of Comminity & Family Medicine">
            Department of Comminity & Family Medicine
          </option>
          <option value="Department of Forensic Medicine">
            Department of Forensic Medicine
          </option>
          <option value="Department of Medicine">Department of Medicine</option>
          <option value="Department of Microbiology">
            Department of Microbiology
          </option>
          <option value="Department of Obsterics & Gynaecology">
            Department of Obsterics & Gynaecology
          </option>
          <option value="Department of Peadiatrics">
            Department of Peadiatrics
          </option>
          <option value="Department of Parasitology">
            Department of Parasitology
          </option>
          <option value="Department of Pathology">
            Department of Pathology
          </option>
          <option value="Department of Pharmacology">
            Department of Pharmacology
          </option>
          <option value="Department of Physiology">
            Department of Physiology
          </option>
          <option value="Department of Phychiatry">
            Department of Phychiatry
          </option>
          <option value="Department of Surgery">Department of Surgery</option>
          <option value="Dean's Office">Dean's Office</option>
          <option value="MEU & AV Unit">MEU & AV Unit</option>
          <option value="IQAC">IQAC</option>
        </Field>

        <ErrorMessage
          name="department"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>

      <div className="flex items-center gap-4 mb-4">
        <label
          htmlFor="designation"
          className="w-32 text-sm font-medium text-gray-900"
        >
          Designation:
        </label>
        <Field
          as="select"
          name="designation"
          id="designation"
          className="flex-1 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        >
          <option value="">Choose a designation</option>
          <option value="Professor">Professor</option>
          <option value="HOD">Head of the Department</option>
          <option value="Dean">Dean</option>
          <option value="Senior lecturer Gr1">Senior Lecturer Gr1</option>
          <option value="Senior lecturer Gr2">Senior Lecturer Gr2</option>
          <option value="Lecturer Gr2">Lecturer Gr2</option>
          <option value="Lecturer Gr1">Lecturer Gr1</option>
          <option value="Lecturer Probationary">Lecturer Probationary</option>
        </Field>
        <ErrorMessage
          name="designation"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>

      <div className="flex items-center gap-4 mb-4">
        <label
          htmlFor="universityEmail"
          className="w-32 text-sm font-medium text-gray-900"
        >
          Email Address(University Provided):
        </label>
        <Field
          name="universityEmail"
          type="text"
          className="flex-1 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        />
        <ErrorMessage
          name="universityEmail"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <label
          htmlFor="personalEmail"
          className="w-32 text-sm font-medium text-gray-900"
        >
          Email Address(Personal):
        </label>
        <Field
          name="personalEmail"
          type="text"
          className="flex-1 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        />
        <ErrorMessage
          name="personalEmail"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <fieldset className="mb-4">
        <div className="flex items-center gap-4">
          <p className="w-50 text-sm font-medium text-gray-900">Are you in long leave:</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {["Yes", "No"].map((title) => (
              <div className="flex items-center gap-x-2" key={title}>
                <Field
                  type="radio"
                  name="onLongLeave"
                  value={title}
                  id={title}
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
          name="onLongLeave"
          component="div"
          className="text-red-500 text-sm"
        />
      </fieldset>
    </div>
  );
}
