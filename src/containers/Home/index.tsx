import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewDispatch, RootState, ServerStore } from "@/store";
import * as actions from "@/store/actions/home";
import image from "@/assets/images/girl.jpeg";
import styles from "./style.less";

const Home = () => {
  const { name, newsList } = useSelector<RootState, RootState["home"]>(
    (state) => state.home
  );
  const dispatch = useDispatch<NewDispatch>();
  useEffect(() => {
    if (newsList.length === 0) {
      dispatch(actions.getHomeList());
    }
  }, [dispatch, newsList.length]);
  return (
    <>
      <div className={styles.name}>this is {name}</div>
      {newsList.map((news) => {
        return <div key={news.id}>{news.title}</div>;
      })}
      <button onClick={() => console.log("click")}>click</button>
      <img src={image} />
    </>
  );
};

Home.loadData = (store: ServerStore) => {
  return store.dispatch(actions.getHomeList());
};

export default Home;
