// database.js
import { db, auth } from "./firebase-config.js";
import { doc, updateDoc, increment, collection, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 1. INCREMENT USER'S COIN COUNT IN FIRESTORE
export async function awardCoins(amount) {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    alert("Please sign in or create an account to start earning coins!");
    return;
  }

  try {
    const userDocRef = doc(db, "users", currentUser.uid);
    await updateDoc(userDocRef, {
      coins: increment(amount)
    });
    console.log(`Earned +${amount} coins!`);
  } catch (error) {
    console.error("Could not update coins: ", error);
  }
}

// 2. FETCH TOP 10 USERS FOR LEADERBOARD
export async function fetchLeaderboard() {
  try {
    const q = query(
      collection(db, "users"),
      orderBy("coins", "desc"),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    let ranking = [];
    querySnapshot.forEach((doc) => {
      ranking.push(doc.data());
    });
    return ranking;
  } catch (error) {
    console.error("Error loading leaderboard: ", error);
    return [];
  }
}