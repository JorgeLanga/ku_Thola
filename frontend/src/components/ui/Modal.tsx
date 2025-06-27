import React from "react"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          {title && <h2 className="text-lg font-semibold text-gray-800">{title}</h2>}
          <button onClick={onClose} aria-label="Fechar modal" className="text-gray-500 hover:text-gray-800">✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}