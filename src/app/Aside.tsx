"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { PostItemProps } from "@/types/IPost";
import Link from "next/link";

const Aside = () => {
  const [allPosts, setAllPosts] = useState<PostItemProps[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch directly from Firestore (independent of Topics)
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "flashblog"), (snapshot) => {
      const docs: PostItemProps[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<PostItemProps, "id">),
      }));
      setAllPosts(docs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Get 5 random posts
  const getRandomTopics = (arr: PostItemProps[], count: number = 5) => {
    if (arr.length <= count) return arr;
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomTopics = getRandomTopics(allPosts, 5);

  // 🔹 Format Firestore date or string date
  // const formatDate = (date: Date) => {
  //   if (!date) return "";
  //   if (typeof date === "string") return new Date(date).toLocaleDateString();
  //   if (date instanceof Timestamp) return date.toDate().toLocaleDateString();
  //   return "";
  // };

  const formatDate = (date: Timestamp | string) => {
    if (!date) return "";

    if (typeof date === "string") {
      return new Date(date).toLocaleDateString();
    }

    if (date instanceof Timestamp) {
      return date.toDate().toLocaleDateString();
    }

    return "";
  };


  return (
    <div className="bg-gray mt-8 p-4 rounded-lg shadow-lg">
      <header>
        <h3 className="text-center text-xl font-bold mb-4">Staff Picks</h3>
      </header>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {randomTopics.map((post) => (
            <li
              key={post.id}
              className="border border-gray-200 p-3 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition"
            >
              <Link href={`/posts/${post.id}`} className="block">
                <p className="font-semibold">Creator: {post.creator}</p>
                <p className="font-bold text-lg mt-1">Topic: {post.subject}</p>
                <p className="text-gray-600 mt-1">
                  {post.content?.length > 50
                    ? post.content.slice(0, 50) + "..."
                    : post.content}
                </p>
                {/* {post.date && (
                  <p className="text-xs text-gray-500 mt-1">
                    Date: {formatDate(post.date)}
                  </p>
                )} */}
                {post.date && (
                  <p className="text-xs text-gray-500 mt-1">
                    Date: {formatDate(post.date)}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Aside;
