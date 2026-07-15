// auth.js
import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 1. REGISTER USER & INITIALIZE DB DOCUMENT
export async function registerUser(email, password, username) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save initial profile details in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      username: username,
      email: email,
      coins: 0
    });

    alert("Account successfully created! Welcome, " + username + "!");
    return user;
  } catch (error) {
    alert("Signup failed: " + error.message);
  }
}

// 2. SIGN IN EXISTING USER
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Welcome back!");
    return userCredential.user;
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}

// 3. LOG OUT USER
export async function logoutUser() {
  await signOut(auth);
  alert("Logged out successfully.");
}