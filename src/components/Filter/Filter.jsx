import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { onFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(onFilter(evt.target.value));
  };

  return (
    <>
      <TextField
        onChange={onChange}
        id="outlined-basic"
        label="Find contacts by name"
        size="normal"
        variant="outlined"
      />
    </>
  );
};

export default Filter;
