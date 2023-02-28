import { useDispatch, useSelector } from 'react-redux';
import { getContactsFilter, setFilter } from 'redux/filter/filterSlice';


export function Filter() {

  const filter = useSelector(getContactsFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={handleFilter} />
    </div>
  );
}

