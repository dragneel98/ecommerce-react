import React, { useState } from 'react'

export default function useModals(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue)

  const handleModal = ()=>{
    if(isOpen===false){
      setIsOpen(true)
    }
    else{ setIsOpen(false)}
  }

  return [isOpen, handleModal]
}
