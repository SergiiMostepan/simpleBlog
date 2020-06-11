import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";
import { getPosts } from "../../operators";
import styles from "./Post.module.css";

const Post = ({ id, pathname }) => {
  let postData = {};
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const lastUpdate = useSelector((state) => state.posts);
  const findData = () =>
    lastUpdate.map((post) => {
      if (post.id.toString() === id) postData = post;
    });
  findData();

  return (
    <div className={styles.container}>
      <h1>Simple Post</h1>
      <Link href="/">
        <div className={styles.goBack}>Go back</div>
      </Link>
      <div className={styles.containerPost}>
        <h4 className={styles.title}>{postData.title}</h4>
        <div className={styles.body}>{postData.body}</div>
      </div>
    </div>
  );
};

export default Post;
