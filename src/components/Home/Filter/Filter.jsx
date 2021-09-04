import { useDispatch, useSelector } from "react-redux";
import { homeActions } from '../actions';

import { v4 as uuidv4 } from 'uuid';

const Filter = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  function optionsCreator(aspect) {

    let newArra = [];

    storeData.data.forEach(element => {

      const check = newArra.some((item) => {
        return item === element[aspect];
      })

      if (!check) {

        newArra = [...newArra, element[aspect]]
      }

    });

    return newArra
  }

  const labelSpecies = optionsCreator('species');
  const labelGender = optionsCreator('gender');

  const handleChange = (e) => {

    const target = e.target;
    const name = target.name;
    const value = target.value;

    dispatch(homeActions({ [name]: value }));

  }
  // console.log(labelCharacter);
  // console.log(labelSpecies);

  return (
    <div>
      <select
        name='selectOne'
        onChange={(e) => handleChange(e)}
        value={storeData.filter.selectOne}
      >
        <option value="All Species">All Species</option>
        {labelSpecies.map((item) =>
          <option value={item} key={uuidv4()}> {item} </option>
        )}
      </select>

      <select
        name='selectTwo'
        onChange={(e) => handleChange(e)}
        value={storeData.filter.selectTwo}

      >
        <option value="All Genders">All Genders</option>
        {labelGender.map((item) =>
          <option value={item} key={uuidv4()}> {item} </option>
        )}
      </select>
    </div>
  );
}

export default Filter;