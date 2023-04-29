// import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input, Form, Button } from './SearchBar.styled';

const SearchBar = ({ inputValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const onSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    setSearchParams({ search: form.input.value });
    form.reset();
  };

  useEffect(() => {
    inputValue(search);
  }, [inputValue, search]);

  return (
    <Form onSubmit={onSubmitForm}>
      <Input type="text" name="input" autoFocus placeholder="Search movie" />

      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
