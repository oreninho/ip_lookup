import './Modal.scss'
import {useEffect, useRef} from "react";

//TODO: should the content be cleared when the modal is closed?
export default function Modal({
  children,
  onClose,
  isOpen = false
}: {
  children: React.ReactNode;
  onClose: () => void;
  isOpen?: boolean;
}) {

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    isOpen ? dialog.showModal() : dialog.close();
  }, [isOpen, dialogRef]);


  return (
    <dialog ref={dialogRef} className="modal"
            onClick={e => e.target === dialogRef.current && onClose()}>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </dialog>
  );
}