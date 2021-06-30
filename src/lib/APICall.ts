import { ActionsI } from "../types";

const APICall = async (dispatch: ActionsI | any): Promise<any> => {
  await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=6Thch6wnSK0ascaiPgdCRv4zOUR8OuLJjBcYLGIU&count=1",
    {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let { date, explanation, title, url } = data[0];
      dispatch({
        type: "SET_ITEM",
        payload: {
          date,
          explanation,
          title,
          url,
        },
      });
    })
    .then(() => {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default APICall;
