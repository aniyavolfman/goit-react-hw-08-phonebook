import { useDispatch, useSelector } from 'react-redux';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { selectContactsFilter } from 'redux/filter/filterSelector';
import { setFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';



export function Filter() {

  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="#6c5ce7" />}
        />
        <Input
          variant="filled"
          placeholder="Find contact"
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
          className={css.input}
        />
      </InputGroup>
    </div>
  );
}

