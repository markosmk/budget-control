import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import api from '../services/RestApiLocalStorage';

const initValue = {
  tax: 19,
  quantity: '',
  type: 'normal',
  name: '',
  currency: '',
  saving: false,
};

export const AddAccountForm = ({ setOpen, identify }) => {
  const [account, setAccount] = useState({});
  const { register, watch, reset, setValue, handleSubmit } = useForm();

  useEffect(() => {
    if (identify) {
      const account = api.get(identify);
      if (account) {
        const fields = ['name', 'quantity', 'currency', 'saving', 'tax', 'type'];
        fields.forEach((field) => setValue(field, account[field]));
        setAccount(account);
      }
    } else {
      reset(initValue);
    }
  }, [identify]);

  const tax = watch('tax');
  const typeAccount = watch('type');

  const onSubmit = (data) => {
    const response = api.post({ id: uuidv4(), ...data });
    setOpen(false);
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nombre de Cuenta
        </label>
        <input
          type="text"
          {...register('name')}
          id="name"
          className="control"
          placeholder="Introduce un nombre para tu cuenta"
          required
        />
      </fieldset>

      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <fieldset>
          <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Cantidad
          </label>
          <input
            type="number"
            min="1"
            step="any"
            {...register('quantity')}
            id="quantity"
            placeholder="Saldo de la cuenta"
            className="control"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Divisa
          </label>
          <select id="currency" defaultValue={'USD'} {...register('currency')} className="control" required>
            <option value="">Selecciona Divisa</option>
            <option value="ARS">ARS</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </fieldset>
      </div>

      <fieldset>
        <label className="inline-flex relative items-center mb-4 cursor-pointer">
          <input type="checkbox" value="1" {...register('saving')} className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Usar como cuenta de ahorro</span>
        </label>
      </fieldset>

      {/* select icono */}

      <fieldset>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="currency" className="block text-sm font-medium text-gray-900 dark:text-white">
            Tipo de Cuenta
          </label>

          <ul className="grid gap-2 w-52 md:grid-cols-2">
            <li>
              <input
                type="radio"
                id="type-normal"
                {...register('type')}
                value="normal"
                className="hidden peer"
                required
              />
              <label
                htmlFor="type-normal"
                className="inline-flex justify-between items-center py-1 px-3 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-xs">Normal</div>
                </div>
              </label>
            </li>
            <li>
              <input type="radio" id="type-business" {...register('type')} value="business" className="hidden peer" />
              <label
                htmlFor="type-business"
                className="inline-flex justify-between items-center  py-1 px-3  w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-xs">Negocios</div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        {typeAccount === 'business' && (
          <>
            <p className="text-slate-400 text-xs mb-4">
              Perfecto para autonomos y cuentas de negocios. Esta cuenta se incluira en los informes especiales y tendra
              en cuenta el impuesto sobre el valor añadido (IVA)
            </p>

            <label htmlFor="tax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Impuesto sobre el Valor Añadido = {tax}%
            </label>
            <input
              id="tax-range"
              type="range"
              min="0"
              max="100"
              {...register('tax')}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </>
        )}
      </fieldset>

      <button type="submit" className="btn">
        {identify ? 'Actualizar cuenta' : 'Agregar nueva cuenta'}
      </button>
    </form>
  );
};
