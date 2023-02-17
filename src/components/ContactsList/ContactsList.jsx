import { List, ListItem, ListItemText, Button } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <ListItemText>
              {contact.name}: {contact.number}
            </ListItemText>
            <Button
              onClick={() => dispatch(deleteContact(contact.id))}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactsList;
