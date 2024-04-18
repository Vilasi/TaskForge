import { forwardRef, useRef } from 'react';
import { createPortal } from 'react-dom';

// import './DeleteModal.css';

const DeleteModal = forwardRef(function DeleteModal({}, ref) {
  return createPortal(
    <dialog ref={ref} className="w-fit rounded backdrop:backdrop-brightness-50">
      {/* <form className="text-right" action="" method="dialog">
        <button className="py-1 px-2 m-1 bg-red-600 hover:bg-red-700">
          Close
        </button>
      </form> */}
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-2xl px-3 pt-3">
          Confirm Delete Project?
        </h1>

        <div className="flex">
          <button className="py-2 px-4 m-1 bg-green-700">Yes</button>
          {/* <button className="py-2 px-4 m-1 bg-red-700">No</button> */}
          <form action="" method="dialog">
            <button className="py-2 px-4 m-1 bg-red-700">No</button>
          </form>
        </div>
      </div>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default DeleteModal;
