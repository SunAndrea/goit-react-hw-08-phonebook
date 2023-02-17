import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

import css from './ContactsForm.module.css';
const ContactsForm = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();

    const contact = {
      name: evt.currentTarget.name.value,
      number: evt.currentTarget.number.value,
    };

    dispatch(addContact(contact));

    evt.currentTarget.reset();
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={onSubmit} className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <TextField
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          name="name"
          id="outlined-basic"
          label="Name"
          size="normal"
          variant="outlined"
          margin="normal"
        />
        <TextField
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
          }}
          name="number"
          id="outlined-basic"
          label="Number"
          size="normal"
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" size="large" variant="contained" color="success">
          ADD CONTACT
        </Button>
      </form>
    </div>
  );
};

export default ContactsForm;
