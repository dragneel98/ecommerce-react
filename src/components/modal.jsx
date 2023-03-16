import React from 'react'
import "/src/style/modal.css"

export default function Modal({children, isOpen, closeModal}) {
  return (
    <article className={`modal ${isOpen && "open"}`} onClick={closeModal}>
        <div className='modal-container'>
            <button className='modal-close-button' onClick={closeModal}>close</button>
            {children}
        </div>
    </article>
  )
}
