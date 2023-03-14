import React from 'react'

export default function Modal({children}) {
  return (
    <article className='modal-open'>
        <div className='modal-container'>
            <button className='modal-button'>close</button>
            {children}
        </div>
    </article>
  )
}
