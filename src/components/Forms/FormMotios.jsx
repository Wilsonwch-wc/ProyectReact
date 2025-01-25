<<<<<<< HEAD
import { useState } from 'react';
import { motion } from 'motion/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, validateAndSaveFormData } from '../../store/formSlice.js';
import ModalInfo from '../Modals/ModalInfo.jsx';
import { useNavigate } from 'react-router-dom'; 
import './Form.css';
=======
import { motion } from "motion/react"
import useForm from "../hooks/userForm.js";

>>>>>>> 08c30ba4c33277f17fb1fc229e0ebccefb125037
// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const navigate = useNavigate(); 

  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === 'mod7-wilsonwc') {
      dispatch(validateAndSaveFormData(formData));
      setShowModal(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Clave incorrecto');
    }
  };


  const onCloseModalInfo = () => {
    setShowModal(false);
    navigate('/landing');
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalInfo
        visible={showModal}
        message="Formulario enviado correctamente."
        onClose={onCloseModalInfo} 
      />
      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{titleForm}</h3>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ position: 'relative' }}>
            <label>
              Password:
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'black',  
                fontWeight: 'bold',  
              }}
            >
              {showPassword ? "Mostrar" : 'Ocultar'}
            </button>

          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label>
              Module:
              <input
                type="text"
                name="module"
                value={formData.module}
                onChange={handleChange}
                disabled
              />
            </label>
          </div>
        </motion.div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button type="submit">Enviar</button>
        </motion.div>
      </form>
    </motion.div>
  );
};
<<<<<<< HEAD

=======
>>>>>>> 08c30ba4c33277f17fb1fc229e0ebccefb125037
export default FormWithMotionAndHook;
