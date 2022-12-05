import { useState } from 'react';
import { HeaderPage } from '../components/HeaderPage';
import { ModalContent } from '../components/ModalContent';
import { AddExpenseForm } from '../forms/AddExpenseForm';

export const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderPage name="Inicio" button={{ action: () => setOpen(!open) }} />

      <ModalContent open={open} setOpen={setOpen} title="Agregar Gasto / Ingreso" content={<AddExpenseForm />} />
    </>
  );
};
