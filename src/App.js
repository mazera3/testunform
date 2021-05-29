import React from 'react';
import {Form}  from '@unform/web';
import './App.css';
import Input from './components/Form/Input';
import { getDefaultNormalizer } from '@testing-library/dom';

const initialData = {
  email: 'mazera3@gmail.com',
}

function App() {
  function handleSubmit(data){
    console.log(data);
  }
  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" />
        <Input type="email" name="email" />
        <Input type="password" name="password" />
        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
