import './Modal.scss'
import {useEffect, useRef} from "react";

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

  const handleModalContentClick = (e) => {
    e.stopPropagation(); // Prevent clicks inside the modal from closing it
  };

  return (
    <dialog ref={dialogRef} className="modal" onClick={onClose}>
      <div className="modal__content" onClick={handleModalContentClick}>
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </dialog>
  );
}