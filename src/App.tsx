import './App.css'
import IpLookupPage from "./components/IpLookupPage/IpLookupPage.tsx";
import Modal from "./components/Modal/Modal.tsx";
import {Suspense, useCallback, useState} from "react";
import Button from "./components/Button/Button.tsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = useCallback(() => {
      setIsOpen(false);
  }, []);

  return   <Suspense>
             <Button className={'primary'} onClick={() => setIsOpen(true)}>Open IP Lookup</Button>
            {isOpen && <Modal onClose={handleClose} isOpen={isOpen}>
                  <IpLookupPage/>
              </Modal>}
            </Suspense>
}

export default App
