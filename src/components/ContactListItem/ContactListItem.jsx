import PropTypes from 'prop-types';
import css from './ContactListItem.module.css'

export function ContactListItem({ name, number, onButtonDelete, buttonId }) {
  
  return (
    <li>
      {name}: <span>{number}</span>
      <button
        id={buttonId}
        onClick={onButtonDelete}
        className={css.buttonDelete}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  onButtonDelete: PropTypes.func.isRequired,
};

