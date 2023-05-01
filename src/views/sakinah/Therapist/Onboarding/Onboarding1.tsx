import React, { useState, useEffect } from "react"
import { Container } from "@mui/material"
import { Box } from "@mui/material"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import Upload from "../Components/Upload"
import { Link, useNavigate } from "react-router-dom"
import Alert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"
import { useStoreTemporary } from "../../../../Zustand"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import { updateDoc, doc, setDoc, getDoc, onSnapshot } from "firebase/firestore"
//@ts-ignore
import { auth, db, storage } from "../../../../Firebase"
import { useStoreUser } from "../../../../Zustand"
import { updateProfile } from "firebase/auth"
import TherapistProfile from "../../User/Therapists/TherapistProfile"
import { Language } from "@mui/icons-material"
import Checkbox from "../Components/Checkbox"
import { title, languages } from "../Components/Data/DataTherapistProfile"
import Input from "../Components/Input"
import CssBaseline from "@mui/material/CssBaseline"

const Onboarding1 = ({ hidden, prevPage, nextPage, text }) => {
  const [gender, setGender] = useState(null)
  const navigate = useNavigate()
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [selectedTitles, setSelectedTitles] = useState([])
  const [selectedTreatmentType, setSelectedTreatmentType] = useState([])
  const { setSnackbarOpen } = useStoreTemporary((state) => state)

  const [therapistProfile, setTherapistProfile] = useState({
    name: "",
    bio: "",
    city: "",
    phone: "",
    country: "",
    gender: gender,
    experience: null,
    education_other: "",
    therapist_id: auth.currentUser?.uid,
    therapist_email: auth.currentUser?.email,
    treatment_type_other: "",
    language: selectedLanguages,
    title: selectedTitles,
    treatment_types: selectedTreatmentType,
    therapist_image_url: "",
    therapist_cv_url: "",
    bank_acc_num: null,
    bank_sort_code: null,
    education: "",
    qualification: "",
    memberships: "",
  })

  useEffect(() => {
    const docRef = doc(db, "therapist-profile", auth.currentUser.uid)
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data()
        setTherapistProfile((prevState) => ({
          ...prevState,
          name: data.therapist_name,
          bio: data.bio,
          education: data.education,
          education_other: data.education_other,
          qualification: data.qualification,
          memberships: data.memberships,
          city: data.city,
          country: data.country,
          phone: data.phone,
          gender: data.gender,
          experience: data.experience,
          treatment_type_other: data.treatment_type_other,
          language: data.selectedLanguages,
          title: data.selectedTitles,
          treatment_types: data.selectedTreatmentType,
          therapist_image_url: data.therapist_image_url,
          therapist_cv_url: data.therapist_cv_url,
          bank_acc_num: data.bank_acc_num,
          bank_sort_code: data.bank_sort_code,
          // Update more fields as needed
        }))
      } else {
        console.log("No such document!")
      }
    })
    // return unsubscribe;
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "therapist-profile", auth.currentUser.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setSelectedLanguages(
            docSnap.data().language !== undefined ? docSnap.data().language : []
          )
          setSelectedTitles(
            docSnap.data().title !== undefined ? docSnap.data().title : []
          )
          setSelectedTreatmentType(
            docSnap.data().treatment_types !== undefined
              ? docSnap.data().treatment_types
              : []
          )
        }
      } catch (error) {
        console.error("Error fetching languages:", error)
      }
    }
    fetchData()
  }, [setSelectedLanguages, setSelectedTitles, setSelectedTreatmentType])

  const handleTherapistProfileChange = (action) => {
    // Update therapist profile in database
    action === setDoc &&
      updateProfile(auth.currentUser, { displayName: therapistProfile.name })
    action(doc(db, "therapist-profile", auth.currentUser.uid), {
      therapist_name: therapistProfile.name,
      therapist_id: auth.currentUser.uid,
      therapist_email: auth.currentUser.email,
      bio: therapistProfile.bio,
      memberships: therapistProfile.memberships,
      qualification: therapistProfile.qualification,
      education: therapistProfile.education,
      education_other: therapistProfile.education_other,
      city: therapistProfile.city,
      country: therapistProfile.country,
      phone: therapistProfile.phone,
      experience: therapistProfile.experience,
      treatment_type_other: therapistProfile.treatment_type_other,
      language: selectedLanguages,
      title: selectedTitles,
      treatment_types: selectedTreatmentType,
      bank_acc_num: therapistProfile.bank_acc_num,
      bank_sort_code: therapistProfile.bank_sort_code,
      gender: gender,
    }).then(() => {
      window.alert("Changes succesfully made!") // Open the Snackbar when the profile is successfully updated
    })
    console.log(auth.currentUser, " auth.currentUser")
    console.log("therapistProfile", therapistProfile)
  }

  const handleInputChange = (event) => {
    console.log("name:", event.target.name)
    console.log("value:", event.target.value)

    const { name, value } = event.target

    name === "language"
      ? setSelectedLanguages((prevSelectedLanguages) => {
          if (prevSelectedLanguages.includes(value)) {
            // If the language is already selected, remove it from the list
            return prevSelectedLanguages.filter(
              (language) => language !== value
            )
          } else {
            // If the language is not selected, add it to the list
            return [...prevSelectedLanguages, value]
          }
        })
      : name === "title"
      ? setSelectedTitles((prevSelectedQualifications) => {
          if (prevSelectedQualifications.includes(value)) {
            // If the title is already selected, remove it from the list
            return prevSelectedQualifications.filter((title) => title !== value)
          } else {
            // If the title is not selected, add it to the list
            return [...prevSelectedQualifications, value]
          }
        })
      : name === "treatment"
      ? setSelectedTreatmentType((prevSelectedTreatmentType) => {
          if (prevSelectedTreatmentType.includes(value)) {
            // If the title is already selected, remove it from the list
            return prevSelectedTreatmentType.filter(
              (treatment) => treatment !== value
            )
          } else {
            // If the title is not selected, add it to the list
            return [...prevSelectedTreatmentType, value]
          }
        })
      : setTherapistProfile((prevState) => ({
          ...prevState,
          [name]: value,
        }))
  }

  const handleChange = (event, newAlignment) => {
    setGender(newAlignment)
  }

  const handleFileChange = async (e, fileType) => {
    const file = e.target.files[0]
    let storagePath, refPath

    if (fileType === "cv") {
      storagePath = `therapist-profile/${auth.currentUser.uid}/${file.name}/CV`
      refPath = `therapist_cv_url`
    } else {
      storagePath = `therapist-profile/${auth.currentUser.uid}/${file.name}`
      refPath = `therapist_image_url`
    }

    const storageRef = ref(storage, storagePath)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",

      () => {
        // Handle successful upload
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // Update therapist profile in Firestore with download URL
          updateDoc(doc(db, "therapist-profile", auth.currentUser.uid), {
            [refPath]: downloadURL,
          }).then(() => {
            window.alert("File uploaded and profile updated successfully")
          })
        })
      }
    )
  }

  return (
    <div>
      <Container>
        <CssBaseline />

        <p
          className={`flex m-auto max-w-lg text-lg mt-12 text-stone-700 ${
            hidden && "hidden"
          } `}
        >
          Thank you for signing up to join our platform! We are grateful for
          your interest and are looking forward to working with you. We know
          that your time is valuable, and we appreciate you taking the time to
          complete the necessary forms. Please be assured that the process will
          not take too long, and we are here to support you every step of the
          way. <br />
          Thank you again for joining us
        </p>

        <form className="w-full max-w-lg mt-12 flex flex-col mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
                {/* @ts-ignore */}
              </label>
              <Input
                type="text"
                name="name"
                placeholder="Jane"
                onChange={handleInputChange}
                value={therapistProfile.name}
                required="true"
              />

              {/* <p className="text-red-500 text-xs italic">
								Please fill out this field.
							</p> */}
            </div>
          </div>
          <ToggleButtonGroup
            color="primary"
            exclusive
            value={gender}
            onChange={handleChange}
            aria-label="Platform"
            style={{ borderColor: "#e5e7eb", height: 56 }}
          >
            <ToggleButton
              value="male"
              style={{
                display: "flex",
                flex: 1,
                width: 250,
                borderColor: "#e5e7eb",
              }}
            >
              Male
            </ToggleButton>
            <ToggleButton
              value="female"
              style={{
                display: "flex",
                flex: 1,
                width: 250,
                borderColor: "#e5e7eb",
              }}
            >
              Female
            </ToggleButton>
          </ToggleButtonGroup>
          <div className="flex flex-wrap -mx-3 my-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="therapist_phone"
              >
                Phone number 📞
              </label>

              <Input
                type="tel"
                name="phone"
                placeholder="+447865432109"
                onChange={handleInputChange}
                value={therapistProfile.phone}
                required="true"
              />

              <p className="text-gray-600 text-xs italic">
                Enter with the country code
              </p>
            </div>
            <div className="w-full px-3 mt-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="therapist_email"
              >
                Email
              </label>

              <Input
                type="email"
                name="email"
                placeholder="therapist@gmail.com"
                onChange={handleInputChange}
                value={therapistProfile.therapist_email}
                required="true"
              />

              <p className="text-gray-600 text-xs italic">
                Enter with the country code
              </p>
            </div>
          </div>
          <div>
            {/* @ts-ignore */}
            {console.log(selectedTreatmentType, "selectedTreatmentType")}
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>

              <Input
                type="text"
                name="city"
                placeholder="London"
                onChange={handleInputChange}
                value={therapistProfile.city}
                required="true"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="country"
                  name="country"
                  value={therapistProfile.country}
                  onChange={handleInputChange}
                >
                  <option>UK</option>
                  <option>US</option>
                  <option>Europe</option>
                  <option>UAE</option>
                  <option>Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-wrap mt-5">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="experience"
                >
                  Full years of Practice
                </label>

                <Input
                  type="number"
                  name="experience"
                  placeholder="12"
                  onChange={handleInputChange}
                  value={therapistProfile.experience}
                  required="true"
                />

                <p className="text-gray-600 text-xs italic">
                  Enter the number of years of active practice . If you have had
                  a break in practice (for example, 3 years without practice),
                  please do not count this break against your return.{" "}
                </p>
              </div>
            </div>

            <div className=" w-full">
              <label
                className="pl-3 uppercase tracking-wide text-gray-700 text-xs font-bold mt-7 flex items-start justify-start"
                htmlFor="title"
              >
                title
              </label>
              <div className="grid grid-cols-3 m-3">
                {title.map((title) => (
                  <Checkbox
                    item={title}
                    name="title"
                    onChange={handleInputChange}
                    checked={selectedTitles.includes(title)}
                  />
                ))}
              </div>

              <Input
                type="text"
                name="education_other"
                placeholder="Other title"
                onChange={handleInputChange}
                value={therapistProfile.education_other}
                required="false"
              />
            </div>

            <label
              htmlFor="bio"
              className="block m-3 text-sm font-medium text-stone-800 "
            >
              About me
            </label>
            <textarea
              id="message"
              rows={4}
              className="block  p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-100 focus:bg-white focus:border-gray-500"
              placeholder="Please write a bio about yourself or insert a link where we can use it for your profile"
              name="bio"
              value={therapistProfile.bio}
              onChange={handleInputChange}
            ></textarea>

            <label
              htmlFor="education"
              className="block m-3 text-sm font-medium text-stone-800 "
            >
              Higher education
            </label>
            <textarea
              id="education"
              rows={4}
              className="block  p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-100 focus:bg-white focus:border-gray-500"
              placeholder="Please write a education about yourself or insert a link where we can use it for your profile"
              name="education"
              value={therapistProfile.education}
              onChange={handleInputChange}
            ></textarea>
            <label
              htmlFor="qualification"
              className="block m-3 text-sm font-medium text-stone-800 "
            >
              Professional qualification and courses
            </label>
            <textarea
              id="qualification"
              rows={4}
              className="block  p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-100 focus:bg-white focus:border-gray-500"
              placeholder="Please write a qualification about yourself or insert a link where we can use it for your profile"
              name="qualification"
              value={therapistProfile.qualification}
              onChange={handleInputChange}
            ></textarea>

            <label
              htmlFor="memberships"
              className="block m-3 text-sm font-medium text-stone-800 "
            >
              Memberships
            </label>
            <textarea
              id="memberships"
              rows={4}
              className="block  p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-100 focus:bg-white focus:border-gray-500"
              placeholder="Please write a memberships about yourself or insert a link where we can use it for your profile"
              name="memberships"
              value={therapistProfile.memberships}
              onChange={handleInputChange}
            ></textarea>

            <label
              className="pl-3 uppercase tracking-wide text-gray-700 text-xs font-bold mt-7 flex items-start justify-start"
              htmlFor="language"
            >
              Languages you hold sessions in
            </label>

            <div className="flex m-3 max-w-lg w-full">
              {languages.map((item) => (
                <Checkbox
                  item={item}
                  name="language"
                  onChange={handleInputChange}
                  checked={selectedLanguages.includes(item)}
                />
              ))}
            </div>
          </div>
          <div className="w-full mt-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="therapist_phone"
            >
              Bank Account Details
            </label>
            <div className="flex justify-between">
              <Input
                type="number"
                name="bank_acc_num"
                placeholder="Account Number"
                onChange={handleInputChange}
                value={therapistProfile.bank_acc_num}
                required="true"
              />
              <Input
                type="number"
                name="bank_sort_code"
                placeholder="Sort Code"
                onChange={handleInputChange}
                value={therapistProfile.bank_sort_code}
                required="true"
              />
            </div>

            <p className="text-gray-600 text-xs italic">
              Enter with the country code
            </p>
          </div>
          <input
            type="file"
            name="cv"
            accept=".pdf, .doc,"
            onChange={(e) => handleFileChange(e, "cv")}
          />

          {therapistProfile.therapist_cv_url && (
            <a
              href={therapistProfile.therapist_cv_url}
              className="underline text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              Click here to view existing file
            </a>
          )}
          {/* <Upload title="Upload CV (optional)" type="file" /> */}
          <p className=" text-gray-600 text-xs italic">
            Please upload your CV, so that we could take information from and
            put on your profile{" "}
          </p>
          {/* @ts-ignore */}
          <input
            type="file"
            name="image"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => handleFileChange(e, "image")}
          />
          {therapistProfile.therapist_image_url && (
            <a
              href={therapistProfile.therapist_image_url}
              className="underline text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Click here to view existing file
            </a>
          )}

          <div className={`bg-gray-50 w-full mt-10 border-t border-blue-300 `}>
            <Container>
              <div
                className={`flex py-10 ${
                  hidden ? "justify-center" : "justify-between"
                }`}
              >
                <Link to={prevPage} className={`${hidden && "hidden"}`}>
                  <button className={`btn-secondary ${hidden && "hidden"}`}>
                    Back
                  </button>
                </Link>
                <Link to={nextPage}>
                  <button
                    className="btn-primary"
                    type="submit"
                    onClick={() =>
                      auth.currentUser.displayName
                        ? handleTherapistProfileChange(updateDoc)
                        : handleTherapistProfileChange(setDoc)
                    }
                  >
                    {text}
                  </button>
                </Link>
              </div>
            </Container>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default Onboarding1
