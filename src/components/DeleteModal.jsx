import { forwardRef } from 'react';
import { createPortal } from 'react-dom';

const DeleteModal = forwardRef(function DeleteModal({ deleteProject }, ref) {
  return createPortal(
    <dialog
      ref={ref}
      className="w-fit pb-3 px-2 rounded backdrop:backdrop-brightness-50"
    >
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-2 px-3 pt-3">
          Confirm Delete Project?
        </h1>

        <div className="flex">
          <button
            onClick={() => deleteProject()}
            className="py-2 px-4 m-1 rounded bg-green-700"
          >
            Yes
          </button>
          <form action="" method="dialog">
            <button className="py-2 px-4 m-1 rounded bg-red-700">No</button>
          </form>
        </div>
      </div>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default DeleteModal;
