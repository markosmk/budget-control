export const HeaderPage = ({ name, button }) => {
  return (
    <div className="flex justify-between items-center border-b pb-2 dark:border-slate-700 h-10">
      <h1 className="font-bold text-lg dark:text-white">{name}</h1>
      {button && (
        <div className="flex justify-end">
          <button
            className="bg-cool-600 text-white text-xs py-2 px-4 rounded-lg hover:bg-cool-700"
            onClick={button.action}
          >
            {button.name ?? 'Agregar'}
          </button>
        </div>
      )}
    </div>
  );
};
