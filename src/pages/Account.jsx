import { useEffect, useState } from 'react';
import { HeaderPage } from '../components/HeaderPage';

import { ModalContent } from '../components/ModalContent';
import { AddAccountForm } from '../forms/AddAccountForm';
import { formatCurrency } from '../services/helpers';
import api from '../services/RestApiLocalStorage';

export const Account = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const listAccounts = api.getAll();
    setAccounts(listAccounts);
  }, [open]);

  const handleDelete = (id) => {
    const response = api.destroy(id);
    setAccounts(response);
  };

  const handleEdit = (id) => {
    const response = api.get(id);
    if (response) {
      console.log(response);
      setOpen(true);
      setEditData(response.id);
    }
  };

  return (
    <>
      <HeaderPage
        name="Cuentas"
        button={{
          action: () => {
            setOpen(!open);
            setEditData(false);
          },
        }}
      />

      <div className="grid my-8 gap-2 md:mb-12 md:grid-cols-2">
        {accounts?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-center p-6 bg-white border border-slate-200 rounded-lg md:border dark:bg-slate-800 dark:border-slate-700"
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>{item.name}</div>
                <div className="text-sm font-light text-slate-500 dark:text-slate-400">
                  <strong>Cantidad:</strong> {item.currency} {formatCurrency(item.quantity, item.currency)} <br />
                  <strong>Tipo de Cuenta: </strong> <span className="capitalize">{item.type}</span>
                  <br />
                  <strong>Cuenta de Ahorro:</strong> {item.saving ? 'Si' : 'No'} <br />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-800 mt-2 text-xs bg-red-100 py-1 px-2 rounded-2xl"
              >
                Eliminar
              </button>
              <button
                onClick={() => handleEdit(item.id)}
                className="text-cool-800 mt-2 text-xs bg-cool-100 py-1 px-2 rounded-2xl"
              >
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>

      <ModalContent
        open={open}
        setOpen={setOpen}
        title={editData ? 'Editar Cuenta' : 'Agregar Cuenta'}
        content={<AddAccountForm setOpen={setOpen} identify={editData} />}
      />
    </>
  );
};
