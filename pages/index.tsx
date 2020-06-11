import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import { getPosts } from "../operators";
import styles from "../styles/LatestPosts.module.css";

export let data: [] | any = [];

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const lastUpdate = useSelector((state: any): object[] => state.posts);
  data = lastUpdate;
  return (
    <>
      <div className={styles.header}>
        <Link href="/posts/new">
          <a>Create new post</a>
        </Link>
      </div>

      <LatestPosts />
    </>
  );
};

export default App;
