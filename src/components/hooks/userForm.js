import { useState } from "react";

const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues);

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Método para resetear el formulario
    const resetForm = () => {
        setFormValues(initialValues);
    };

    return {
        formValues,
        handleChange,
        resetForm,
    };
};

export default useForm;
