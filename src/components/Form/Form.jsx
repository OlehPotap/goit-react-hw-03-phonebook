import React from 'react';
import styles from '../Form/form.module.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  // Сброс полей формы при сабмите
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  // Записываем значения введенные в импут в свойства в state:
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // При сабмите формы этот метод выполняет действия записанные в него,
  // пока только предотвращение перезагрузки странички
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <div className={styles.box}>
        <form
          className={styles.form}
          action="submit"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="number">Number</label>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
