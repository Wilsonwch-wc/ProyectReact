import "./moda.css";

// eslint-disable-next-line react/prop-types
const ModalInfo = ({ visible, message, onClose }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button className="modal-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalInfo;
