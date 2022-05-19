import ContactsListItem from './ContactsListItem';
import PropTypes from 'prop-types';

const List = ({ filteredData, onClick }) => {
  return (
    <ol className="list">
      {filteredData.map(el => {
        return (
          <ContactsListItem
            key={el.id}
            onClick={onClick}
            name={el.name}
            number={el.number}
          />
        );
      })}
    </ol>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),

  onClick: PropTypes.func,
};

export default List;
