import { auth, db } from "./firebase-config.js";
import { GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const googleProvider = new GoogleAuthProvider();

// Google Auth Flow (Handles both Login and Account Creation automatically)
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Check if user record exists in Firestore 'users' collection
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    // If first time logging in, initialize user document
    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        uid: user.uid,
        username: user.displayName || "Explorer",
        email: user.email,
        photoURL: user.photoURL || "",
        coins: 0,
        createdAt: new Date().toISOString()
      });
    }

    return user;
  } catch (error) {
    alert("Google Sign-In failed: " + error.message);
  }
}

// Log Out User
export async function logoutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
  }
}