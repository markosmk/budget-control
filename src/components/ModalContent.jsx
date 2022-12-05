export const ModalContent = ({ open, setOpen, title, content }) => {
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  justify-center items-center w-full md:inset-0 h-modal md:h-full bg-cool-900 bg-opacity-70 backdrop-blur-sm ${
        open ? 'flex' : 'hidden'
      }`}
    >
      <div className="absolute inset-0 z-10" onClick={() => setOpen(false)}></div>
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto z-50">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-slate-800 sm:p-5">
          {/* Modal header */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-slate-600">
            <h3 className="text-lg font-semibold text-cool-900 dark:text-white">{title}</h3>
            {/* Close modal */}
            <button
              type="button"
              className="text-cool-600 dark:text-white bg-transparent hover:bg-slate-100 hover:text-cool-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-cool-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={() => setOpen(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {open && content}
        </div>
      </div>
    </div>
  );
};
