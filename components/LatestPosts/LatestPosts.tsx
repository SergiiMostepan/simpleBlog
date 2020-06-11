import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import styles from "./LatestPosts.module.css";
import { deletePost } from "../../operators";

const LatestPosts = () => {
  const lastUpdate = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();
  const hendlClick = (id: string) => dispatch(deletePost(id));

  return (
    <div className={styles.container}>
      <h2>Posts</h2>
      <div className={styles.postsContainer}>
        {lastUpdate &&
          lastUpdate.map((post: object | any) => (
            <div key={post.id} className={styles.postContainer}>
              <div className={styles.textBodyCont}>
                <div className={styles.title}>{post.title}</div>
                <div className={styles.bodyText}>{post.body}</div>
              </div>
              <div className={styles.btnContainer}>
                <Link href="/posts/[postId]" as={`/posts/${post.id}`}>
                  <a>
                    <div className={styles.open}>Open</div>
                  </a>
                </Link>
                <button
                  className={styles.delete}
                  onClick={() => hendlClick(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LatestPosts;
