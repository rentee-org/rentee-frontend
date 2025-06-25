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
            <div
                className="bg-white rounded-lg shadow-lg relative w-full max-w-lg h-[600px] flex flex-col"
                style={{ maxHeight: "90vh" }}
            >
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10 w-12 h-12 text-3xl flex items-center justify-center" 
                    onClick={onClose}
                >
                    &times;
                </button>
                {/* Scrollable body */}
                <div className="overflow-y-auto p-6 flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;