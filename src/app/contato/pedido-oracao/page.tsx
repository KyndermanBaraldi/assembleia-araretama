'use client'

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
  nome: string;
  tel: string;
  pedido: string;
}

export default function Page() {
  const { register, handleSubmit, reset  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    alert('Que a paz do Senhor esteja com você! Seu pedido de oração foi recebido com gratidão.');
    reset();
  };

  return (
    <div className="page-body">
      <h1>Igreja Assembleia do Araretama</h1>
      <h2>Pedido de Oração</h2>
      <p>Cadastre seu pedido de oração abaixo, que iremos orar pela sua vida. Os Cultos de Graça ocorrem aos domingos às 18h. Venha cultuar a Deus conosco.</p>
      <form className="form-pedido" onSubmit={handleSubmit(onSubmit)}>
        <div className="controles">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" {...register('nome')} />
          
        </div>
        <div className="controles">
          <label htmlFor="tel">Whatsapp</label>
          <input type="tel" id="tel" {...register('tel')} />
          
        </div>
        <div className="controles">
          <label htmlFor="pedido">Pedido de Oração</label>
          <input type="text" id="pedido" {...register('pedido')} />
          
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

