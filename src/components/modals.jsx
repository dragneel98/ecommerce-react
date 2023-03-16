import React from 'react'
import useModals from './hooks/useModals'
import Modal from './modal'

export default function Modals() {
  const [logInIsOpen, loginHandleIsOpen] = useModals(false)

  return (
    <div>
    <h1> modals </h1>
    <button onClick={loginHandleIsOpen}>modal 1</button>
    <Modal isOpen={logInIsOpen} closeModal={loginHandleIsOpen}>
        <h1>modal 1</h1>
    </Modal>
    </div>
  )
}
