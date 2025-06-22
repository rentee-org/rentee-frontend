import React from "react";

    interface ModalProps {
        open: boolean;
        onClose: () => void;
        children: React.ReactNode;
    }

    const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full">
            <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
            >
            &times;
            </button>
            {children}
        </div>
        </div>
    );
};

export default Modal;