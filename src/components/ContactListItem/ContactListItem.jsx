import PropTypes from 'prop-types';
import { Button, ListItem, ListIcon } from '@chakra-ui/react';
import { StarIcon} from '@chakra-ui/icons';
import css from './ContactListItem.module.css'

export function ContactListItem({ name, number, onButtonDelete, buttonId }) {
  
  return (
    <ListItem>
      <ListIcon as={StarIcon} color="#6c5ce7" />
      {name}: <span>{number}</span>
      <Button
        size="xs"
        colorScheme="purple"
        id={buttonId}
        onClick={onButtonDelete}
        className={css.buttonDelete}
      >
        Delete
      </Button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  onButtonDelete: PropTypes.func.isRequired,
};

