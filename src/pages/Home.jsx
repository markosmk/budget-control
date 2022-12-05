import { useState } from 'react';
import { ModalContent } from '../components/ModalContent';
import { AddExpenseForm } from '../forms/AddExpenseForm';

export const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <div className="flex justify-between items-center border-b pb-2 dark:border-slate-700">
          <h1 className="font-bold text-lg dark:text-white">Inicio</h1>
          <div className="flex justify-end">
            <button
              className="bg-cool-600 text-white text-xs py-2 px-4 rounded-lg hover:bg-cool-700"
              onClick={() => setOpen(!open)}
            >
              Agregar
            </button>
          </div>
        </div>

        <ModalContent open={open} setOpen={setOpen} title="Agregar Gasto / Ingreso" content={<AddExpenseForm />} />
      </div>
    </div>
  );
};
