import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { homeActions } from './actions';
import Loading from "../UI Library/Loading/Loading";
import Gallery from "./Gallery/Gallery";
import Filter from "./Filter/Filter";

const Home = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeActions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(storeData);

  return (
    <div>

      {storeData.data && <Filter />}

      {storeData.loading && <Loading />}

      {storeData.data && <Gallery />}

    </div>
  );
}

export default Home;