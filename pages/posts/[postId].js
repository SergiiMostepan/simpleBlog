import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import Post from "../../components/Post/Post";
import { data } from "../index";

const PostPage = ({ postId }) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/");
  }, []);

  const lastUpdate = useSelector((state) => state.posts);
  return (
    <>
      <Post id={postId} pathname={router.pathname} data={router} />
    </>
  );
};

export default PostPage;

export function getStaticProps({ params: { postId } }) {
  return { props: { postId: postId } };
}

export function getStaticPaths() {
  return {
    paths: data.map((post) => ({
      params: { postId: post.id.toString() },
    })),
    fallback: true,
  };
}
