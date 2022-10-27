import { useAppDispatch } from '../../app/hooks';
import React, { useState } from 'react';
import { addToDo } from './todoSlice';
const AddToDo: React.FC = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim()) {
      return;
    }
    dispatch(addToDo(text));
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default AddToDo;
