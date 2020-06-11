import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import Modal from "react-modal";
import Post from "../../components/Post/Post";
import { data } from "../index";

// Modal.setAppElement("#__next");

// const ArticlePage = ({ articleId }) => {
//   const router = useRouter();
const PostPage = ({ postId }) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lastUpdate = useSelector((state) => state.posts);
  return (
    <>
      <Post
        id={postId}
        // dataa={findData()}
        pathname={router.pathname}
        data={router}
      />
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
