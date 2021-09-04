import { useDispatch, useSelector } from "react-redux";

const Gallery = () => {

  const storeData = useSelector(state => state);
  // const dispatch = useDispatch();


  // console.log(storeData.data);

  return (
    <div>
      <h1>Rick and Morty characters</h1>
      {storeData.data.map((item) => (
        <div key={item.id}>
          <h3 >{item.name}</h3>
          <img src={item.image} alt="character" />
        </div>
      ))}
    </div>
  );
}

export default Gallery;