import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const AddExpenseForm = () => {
  const [form, setForm] = useState({});
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setForm(data);
    console.log(data);
  };

  return (
    <form autoComplete="off" className="my-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <fieldset>
          <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Quantity
          </label>
          <input
            type="number"
            {...register('quantity')}
            id="quantity"
            className="control"
            placeholder="234.555"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Currency
          </label>
          <select id="currency" defaultValue={'USD'} {...register('currency')} className="control" required>
            <option value="">Select Currency</option>
            <option value="ARS">ARS</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </fieldset>

        <fieldset>
          <legend className="sr-only">Type</legend>
          <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Type
          </label>
          <div className="flex gap-4 item-center mt-4">
            <div className="flex items-center">
              <input
                id="type-option-1"
                type="radio"
                name="type"
                value="income"
                {...register('type')}
                className="w-4 h-4 border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                checked
              />
              <label
                htmlFor="type-option-1"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Income
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="type-option-2"
                type="radio"
                name="type"
                value="spend"
                {...register('type')}
                className="w-4 h-4 border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="type-option-2"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Spend
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </label>
          <select id="category" defaultValue={'TV'} {...register('category')} className="control" required>
            <option value="">Select category</option>
            <option value="TV">TV/Monitors</option>
            <option value="PC">PC</option>
            <option value="GA">Gaming/Console</option>
            <option value="PH">Phones</option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Fecha
          </label>
          <input type="date" {...register('date')} id="date" className="control" required />
        </fieldset>
        <fieldset>
          <label htmlFor="recurrent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Recurrent
          </label>
          <select id="recurrent" defaultValue={'never'} {...register('recurrent')} className="control" required>
            <option value="">Select Recurrence</option>
            <option value="never">Nunca</option>
            <option value="weekly">Semanal</option>
            <option value="monthly">Mensual</option>
            <option value="annual">Anual</option>
          </select>
        </fieldset>

        <fieldset className="sm:col-span-2">
          <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Notes
          </label>
          <textarea
            id="notes"
            rows="2"
            name="notes"
            {...register('notes')}
            className="control"
            placeholder="Write aditional notes here"
          ></textarea>
        </fieldset>
      </div>
      <button type="submit" className="btn">
        Add new
      </button>
      <div className="flex w-full p-4">
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div>
    </form>
  );
};
