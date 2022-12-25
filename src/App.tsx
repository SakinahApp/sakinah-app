import React from "react";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import AuthContainer from "./views/auth/User/AuthContainer";
import { Routes, Route } from "react-router-dom";
import LoginWithPhone from "./views/auth/User/SignInPhone";
import Login from "./views/auth/User/SignIn";
import SignUp from "./views/auth/User/SignUp";
import Profile from "./views/sakinah/User/Profile";
import Preferences from "./views/sakinah/User/MyPreferences";
import MyHome from "./views/sakinah/User/ProfileHome/MyHome";
import MySessions from "./views/sakinah/User/MySessions";
import MyTherapists from "./views/sakinah/User/MyTherapists";
import MySettings from "./views/sakinah/User/MySettings";
import TherapistProfile from "./views/sakinah/User/Therapists/TherapistProfile";
import ProtectedRoute from "./views/auth/ProtectedRoutes/ProtectedRoute";
import UserInfo from "./views/sakinah/User/UserInfo";
import ForgotPassword from "./views/auth/User/ForgotPassword";
import MyPreferences from "./views/sakinah/User/MyPreferences";
import { db } from "./Firebase";
import { getDoc, doc } from "firebase/firestore";
import { useStoreSession } from "./Zustand";

function App() {
  const { userInfo, setUserInfo, userLogin, setUserLogin } = useStoreSession();

  console.log("userInfo :>> ", userInfo);
  console.log("userLogin :>> ", userLogin);

  // Fetch current user data
  async function fetchData(uid: string) {
    const docRef = doc(db, "users", uid);
    const usersData = await getDoc(docRef);

    usersData.exists()
      ? setUserInfo(usersData.data())
      : console.log("No such document!");
  }

  // set logged in user and fethced user data
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLogin(user);
        fetchData(user.uid);
      } else {
        // User is signed out
        setUserLogin(null);
        fetchData(null);
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/auth" element={<AuthContainer />}>
        <Route path="login" element={<Login />} />
        <Route path="login-phone" element={<LoginWithPhone />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route element={<ProtectedRoute user={userLogin} />}>
        <Route path="/user-preferences" element={<MyPreferences />} />
        <Route path="user-info" element={<UserInfo />} />
        <Route path="/" element={<Profile />}>
          <Route index element={<MyHome />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="sessions" element={<MySessions />} />
          <Route path="therapists" element={<MyTherapists />} />
          <Route path="therapist/:id" element={<TherapistProfile />} />
          <Route path="settings" element={<MySettings />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
