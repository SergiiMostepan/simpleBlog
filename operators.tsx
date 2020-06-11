import axios from "axios";
import {
  getContactsStart,
  getContactsSucsess,
  // getContactsError,
  postContactsStart,
  postContactsSucsess,
  // postContactsError,
  deleteContactsStart,
  deleteContactsSucsess,
  // deleteContactsError,
} from "./actions";

export const getPosts = () => {
  return (dispatch: any) => {
    dispatch(getContactsStart());

    axios.get(`https://simple-blog-api.crew.red/posts`).then((res) => {
      dispatch(getContactsSucsess(res.data));
    });
  };
};

export const deletePost = (id: string) => (dispatch: any) => {
  dispatch(deleteContactsStart());

  axios.delete(`https://simple-blog-api.crew.red/posts/${id}`).then(() => {
    dispatch(deleteContactsSucsess(id));
  });
};

export const postPosts = (postToPost: {}) => (dispatch: any) => {
  dispatch(postContactsStart());

  axios
    .post(`https://simple-blog-api.crew.red/posts`, postToPost)
    .then((res) => {
      dispatch(postContactsSucsess(res.data));
    });
};
