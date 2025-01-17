import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FormLogin = ({ titleForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
    console.log('Datos del formulario: ', formData);
  };
  


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };
  

  return (
    <>
      <h3>{titleForm}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>Email:
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </>
  );
};

export default FormLogin;
