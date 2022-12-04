import { useState } from 'react';
import { ModalContent } from '../components/ModalContent';
import { AddAccountForm } from '../forms/AddAccountForm';

export const Account = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center border-b pb-2">
        <h1 className="font-bold text-lg">Account</h1>
        <div className="flex justify-end">
          <button
            className="bg-lime-200 text-lime-800 text-xs py-1 px-3 rounded-md hover:bg-lime-300"
            onClick={() => setOpen(!open)}
          >
            Agregar
          </button>
        </div>
      </div>

      <ModalContent open={open} setOpen={setOpen} title="Add Account" content={<AddAccountForm />} />
    </div>
  );
};
