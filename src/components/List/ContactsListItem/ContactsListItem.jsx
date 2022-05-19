import styles from '../ContactsListItem/contacts-list-item.module.css';

const ContactsListItem = ({ onClick, name, number } = {}) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>
        {name} {number}
      </p>
      <button
        onClick={event => {
          onClick(name);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsListItem;
