import axios from "axios";
import Post from "../models/Post";

export async function getPosts(): Promise<Post[]> {
  const res = await axios.get<Post[]>("http://localhost:6060/posts");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
export async function postPost(post: Post) {
  await axios.post<Post>("http://localhost:6060/posts", post);
}
