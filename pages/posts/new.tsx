import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPosts } from "../../operators";
import styles from "../../styles/New.module.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const changeHandlerTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const changeHandlerBody = (event: any) => {
    setBody(event.target.value);
  };

  const submittHendler = (event: any) => {
    event.preventDefault();
    const postData = {
      title,
      body,
    };
    dispatch(postPosts(postData));
    // console.log(postData);
    setTitle("");
    setBody("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Create new post</h2>
        <Link href="/">
          <a className={styles.goBack}>Go back</a>
        </Link>
      </div>
      <form className={styles.form} onSubmit={submittHendler}>
        <label className={styles.label} htmlFor="title">
          Title
        </label>
        <input
          name="title"
          id="title"
          value={title}
          onChange={changeHandlerTitle}
          type="text"
        ></input>
        <label className={styles.label} htmlFor="body">
          Text
        </label>
        <input
          name="body"
          id="body"
          value={body}
          onChange={changeHandlerBody}
          type="text"
        ></input>
        <button className={styles.btn} type="submit">
          Create post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
