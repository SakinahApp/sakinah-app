import React from "react"
import "./App.css"
import "./styles.css"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "./Firebase"
import AuthContainer from "./views/auth/User/AuthContainer"
import { Routes, Route } from "react-router-dom"
import LoginWithPhone from "./views/auth/User/SignInPhone"
import Login from "./views/auth/User/SignIn"
import SignUp from "./views/auth/User/SignUp"
import Profile from "./views/sakinah/User/Profile"
import Preferences from "./views/sakinah/User/MyPreferences"
import MyDashboard from "./views/sakinah/User/MyDashboard"
import MySessions from "./views/sakinah/User/MySessions"
import MyTherapists from "./views/sakinah/User/MyTherapists"
import MySettings from "./views/sakinah/User/MySettings"
import TherapistProfile from "./views/sakinah/User/Therapists/TherapistProfile"
import ProtectedRoute from "./views/auth/ProtectedRoutes/ProtectedRoute"
import UserInfo from "./views/sakinah/User/UserInfo"
import ForgotPassword from "./views/auth/User/ForgotPassword"
import MyPreferences from "./views/sakinah/User/MyPreferences"
import { getDoc, doc, collection, getDocs } from "firebase/firestore"
import { useStoreUser } from "./Zustand"
import LayoutTherapist from "./views/sakinah/Therapist/pages/LayoutTherapist"
import CalendarTherapist from "./views/sakinah/Therapist/pages/CalendarTherapist"
import DashboardTherapist from "./views/sakinah/Therapist/pages/DashboardTherapist"
import Onboarding1 from "./views/sakinah/Therapist/Onboarding/Onboarding1"
import Onboarding3 from "./views/sakinah/Therapist/Onboarding/Onboarding3"
import AuthTherapist from "./views/auth/Therapist/AuthTherapist"
import LoginTherapist from "./views/auth/Therapist/SignInTherapist"
import OnboardingLayout from "./views/sakinah/Therapist/Onboarding/OnboardingLayout"
import SignUpTherapist from "./views/auth/Therapist/SignUpTherapist"
import { Navigate, Outlet } from "react-router-dom"
// import ProtectedRouteTherapist from './views/auth/ProtectedRoutes/ProtectedRouteTherapist';
import CustomersTherapist from "./views/sakinah/Therapist/pages/CustomersTherapist"
import PaymentsTherapist from "./views/sakinah/Therapist/pages/PaymentsTherapist"
import SettingsTherapist from "./views/sakinah/Therapist/pages/SettingsTherapist"
import TherapistProfilePage from "./views/sakinah/Therapist/pages/TherapistProfilePage"
import CustomerProfile from "./views/sakinah/Therapist/pages/CustomerProfile"
import Onboarding2 from "./views/sakinah/Therapist/Onboarding/Onboarding2"

function App() {
  const { userInfo, setUserInfo, userLogin, setUserLogin } = useStoreUser()

  // console.log("userInfo :>> ", userInfo);
  // console.log("userLogin :>> ", userLogin);

  // collection ref
  // const colRef = collection(db, "users");

  // // get collection data
  // getDocs(colRef)
  // 	.then((snapshot) => {
  // 		let users = [];
  // 		snapshot.docs.forEach((doc) => {
  // 			users.push({ ...doc.data(), id: doc.id });
  // 		});
  // 		console.log(users);
  // 	})
  // 	.catch((err) => {
  // 		console.log(err.message);
  // 	});

  // Fetch current user data
  async function fetchData(uid: string) {
    const docRef = doc(db, "users", uid)
    const usersData = await getDoc(docRef)

    usersData.exists()
      ? setUserInfo(usersData.data())
      : console.log("No such document!")
  }

  // set logged in user and fethced user data
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLogin(user)
        fetchData(user.uid)
      } else {
        // User is signed out
        setUserLogin(null)
        fetchData(null)
      }
    })
  }, [])

  return (
    <Routes>
      <Route path="/auth" element={<AuthContainer />}>
        <Route path="login" element={<Login />} />
        <Route path="login-phone" element={<LoginWithPhone />} />
        <Route path="register" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route element={<ProtectedRoute user={userLogin} />}>
        <Route path="/user-preferences" element={<MyPreferences />} />
        <Route path="user-info" element={<UserInfo />} />
        <Route path="/" element={<Profile />}>
          <Route index element={<MyDashboard />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="sessions" element={<MySessions />} />
          <Route path="therapist-list" element={<MyTherapists />} />
          <Route path="therapist/:id" element={<TherapistProfile />} />
          <Route path="settings" element={<MySettings />} />
        </Route>
      </Route>

      {/* Therapist Auth */}
      <Route path="/auth/therapists" element={<AuthTherapist />}>
        <Route path="signin" element={<LoginTherapist />} />
        <Route path="signup" element={<SignUpTherapist />} />
      </Route>

      {/* Therapist Onboarding */}
      {/* <Route element={<ProtectedRouteTherapist user={true} />}> */}
      <Route path="/therapists/onboarding" element={<OnboardingLayout />}>
        <Route
          index
          element={
            <Onboarding1
              hidden={true}
              prevPage=""
              nextPage="/therapists/onboarding/2"
              text="Next"
            />
          }
        />
        <Route
          path="2"
          element={
            <Onboarding2
              hidden={false}
              prevPage="/therapists/onboarding/"
              nextPage="/therapists/onboarding/3"
              text="Next"
            />
          }
        />
        <Route
          path="3"
          element={
            <Onboarding3
              hidden={false}
              prevPage="/therapists/onboarding/2"
              nextPage="/therapist"
              text="Submit & Go to Dashboard"
            />
          }
        />
      </Route>
      {/* </Route>  */}

      {/* Therapist Dashboard */}
      <Route path="/therapist" element={<LayoutTherapist />}>
        <Route index element={<DashboardTherapist />} />
        <Route path="calendar" element={<CalendarTherapist />} />
        <Route path="customers" element={<CustomersTherapist />} />
        <Route path="customers/:id" element={<CustomerProfile />} />
        <Route path="payments" element={<PaymentsTherapist />} />
        {/* <Route path="profile" element={< TherapistProfilePage />} /> */}
        <Route path="therapist-settings" element={<SettingsTherapist />} />
      </Route>
    </Routes>
  )
}

export default App
