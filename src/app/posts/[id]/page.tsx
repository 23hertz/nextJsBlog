"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { PostItemProps } from "@/types/IPost";
import { Timestamp } from "firebase/firestore";

const PostPage = () => {
  const { id } = useParams(); // 👈 get post ID from URL
  const [post, setPost] = useState<PostItemProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      const docRef = doc(db, "flashblog", id as string);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost({
          id: docSnap.id,
          ...(docSnap.data() as Omit<PostItemProps, "id">),
        });
      } else {
        setPost(null);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);


  const formatDate = (date: Timestamp | string | null | undefined) => {
    if (!date) return "";

    if (typeof date === "string") {
      return new Date(date).toLocaleDateString();
    }

    if (date instanceof Timestamp) {
      return date.toDate().toLocaleDateString();
    }

    return "";
  };

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg bg-white shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-4">{post.subject}</h1>
      <h1 className="text-md font-md mb-4 text-gray-900">{post.content}</h1>
      <p className="text-gray-400">By {post.creator}</p>
      {post.date && (
        <p className="text-sm text-gray-500">
          Published: {formatDate(post.date)}
        </p>
      )}
    </div>
  );
};

export default PostPage;
