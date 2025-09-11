"use client";

import { useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { storage } from "@/lib/firebaseConfig"; // 👈 make sure storage is exported in firebaseConfig
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Header from "../Header";
import Link from "next/link";

const CreateTopic = () => {
  const [user, setUser] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user.trim() || !subject.trim() || !topic.trim()) {
      alert("Please fill all fields before submitting");
      return;
    }

    setLoading(true);

    try {
      
      await addDoc(collection(db, "flashblog"), {
        subject,
        content: topic,
        creator: user,
        date: serverTimestamp(),
      });

      alert("✅ Post created successfully!");

      // Reset form
      setUser("");
      setSubject("");
      setTopic("");
    } catch (error) {
      console.error("Error adding post:", error);
      alert("Failed to add post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-2 mx-auto">
      <Header />
    

      <div className="mb-4 px-4">
        <Link
          href="/"
          className="inline-block px-4 py-2 text-sm font-medium shadow-sm text-gray-700 hover:bg-gray-100 transition mt-4"
        >
          ← Back to Home
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="py-4 shadow-xl text-center flex flex-col items-center"
      >
        <input
          type="text"
          placeholder="Username"
          className="block w-1/2 p-2 h-10 mb-6 border border-gray-200 rounded-lg shadow-inner text-gray-600"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="text"
          placeholder="Topic header"
          className="block w-1/2 p-2 h-10 mb-6 border border-gray-200 rounded-lg shadow-inner text-gray-600"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          placeholder="Start a discussion..."
          className="block w-1/2 p-2 h-20 border border-gray-200 rounded-lg shadow-inner text-gray-600 mb-6"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading || !user.trim() || !subject.trim() || !topic.trim()}
          className="mt-4 border border-gray-200 w-28 font-medium text-md py-2 shadow-sm rounded-md text-center mb-6 text-gray-700 hover:bg-gray-100 transition"
        >
          {loading ? "Posting.." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateTopic;
