import React from 'react';
import './ImageModal.css';

function ImageModal({ imageUrl, alt, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imageUrl} alt={alt} className="modal-image" />
      </div>
    </div>
  );
}

export default ImageModal;