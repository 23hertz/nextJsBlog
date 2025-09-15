"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { PostItemProps } from "@/types/IPost";
// import Search from "./Search";
import Link from "next/link";
import { Rubik_Bubbles } from "next/font/google";

type TopicProps = {
  searchQuery?: string;
};

const roboto = Rubik_Bubbles({ weight: ["400"], subsets: ["latin"] });

const Topics = ({ searchQuery = "" }: TopicProps) => {
  const [posts, setPosts] = useState<PostItemProps[]>([]);
  const [loading, setLoading] = useState(true);
  // const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "flashblog"),
      (querySnapshot) => {
        const docs: PostItemProps[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<PostItemProps, "id">),
        }));
        setPosts(docs);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  console.log("Topics received searchQuery:", searchQuery);

  // 🔍 filter posts by searchQuery
  const filteredPosts = posts.filter(
    (post) =>
      post.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.creator?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (date: any) => {
    if (!date) return "";
    if (typeof date === "string") {
      return new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
    if ("toDate" in date) {
      return date.toDate().toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
    return "";
  };

  return (
    <div className="p-4">
      {loading ? (
        <p>Loading...</p>
      ) : filteredPosts.length > 0 ? (
        <ul className="space-y-4 mt-2">
          {filteredPosts.map((post) => (
            <li
              key={post.id}
              className="border-b-2 border-gray-200 p-3 rounded-lg  bg-white"
            >
              <Link href={`/posts/${post.id}`}>
                <p className="{roboto} ">
                  {post.creator}
                </p>
                <p className="font-bold text-2xl mt-1">Topic: {post.subject}</p>
                <p className="font-medium text-gray-500">
                  Content: {post.content}
                </p>

                {post.date && (
                  <p className="text-xs text-gray-500">
                    Date: {formatDate(post.date)}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts match your search.</p>
      )}
    </div>
  );
};

export default Topics;
