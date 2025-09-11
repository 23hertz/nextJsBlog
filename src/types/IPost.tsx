import { Timestamp } from "firebase/firestore";

export interface PostItemProps {
  id: string;
  subject: string;
  content: string;
  creator: string;
  // date: Timestamp;
  date: Timestamp | string;
}
