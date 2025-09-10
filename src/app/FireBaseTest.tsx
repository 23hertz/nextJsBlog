import { useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// adjust path based on your file structure
import { db } from "@/lib/firebaseConfig"; // adjust path based on your file structure

const FireBaseTest = () => {
  useEffect(() => {
    const testConnection = async () => {
      try {
        // Write test
        const docRef = await addDoc(collection(db, "testCollection"), {
          message: "Hello Firebase!",
          timestamp: new Date(),
        });
        console.log("Test doc added with ID:", docRef.id);

        // Read test
        const querySnapshot = await getDocs(collection(db, "testCollection"));
        querySnapshot.forEach((doc) => {
          console.log("Fetched doc:", doc.id, doc.data());
        });
      } catch (error) {
        console.error("Firebase connection test failed:", error);
      }
    };

    testConnection();
  }, []);

  return <div>Check the console for Firebase test results.</div>;
};

export default FireBaseTest;
