import React, { useState } from 'react'

export default function useModals(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue)
  const openModal = ()=> setIsOpen(true)
  const closeModal = ()=> setIsOpen(false)

  return [isOpen, openModal, closeModal]
}
