import React from "react";
import { useForm, Controller } from "react-hook-form";  // Importa Controller

const nombre = ''

const FormContact = ({ onBack }) => {
  const { register, handleSubmit, control, setValue, formState } = useForm();  // Agrega control y setValue a las opciones

  const onSubmit = (data) => {
    console.log(data);
  };

  const formatPhoneNumber = (input) => {
    const cleaned = ('' + input).replace(/\D/g, '');

    if (cleaned.length <= 10) {
      const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      return formatted;
    }

    // Si el número es más largo de lo esperado, no aplicar formato
    return input;
  };

  return (
    <>
      <div className="container text-center mt-5">
        <h5 className="text-secondary text-center mb-5">
          Muchas gracias <span className="text-primary"> {nombre} </span>.  <br />
          <br /> Compártenos tus datos de contacto, estos son necesarios para
          poder generar tu cotización y enviarte la póliza a tu correo.
        </h5>
      </div>
      <div className="container mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label fw-bold text-body-secondary"
            >
              Correo Electronico
            </label>
            <input
              type="email"
              className="form-control border-secondary "
              name="email"
              placeholder="Escribe tu correo electrónico"
              {...register("email", {
                required: true,
                pattern: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
              })}
            />
            {formState.errors.email &&
              formState.errors.email.type === "required" && (
                <div className="text-danger">Este campo es obligatorio</div>
              )}
            {formState.errors.email &&
              formState.errors.email.type === "pattern" && (
                <div className="text-danger">
                  Por favor, ingresa un correo válido
                </div>
              )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="telefono"
              className="form-label fw-bold text-body-secondary"
            >
              Teléfono
            </label>
            <Controller
              control={control}
              name="telefono"
              render={({ field }) => (
                <input
                  type="text"
                  className="form-control border-secondary"
                  placeholder="Escribe tu teléfono de contacto"
                  {...field}
                  onChange={(e) => {
                    const formattedNumber = formatPhoneNumber(e.target.value);
                    setValue("telefono", formattedNumber);
                  }}
                />
              )}
              rules={{
                required: true,
                pattern: /^[0-9-]{12}$/,
              }}
            />
            {formState.errors.telefono &&
              formState.errors.telefono.type === "required" && (
                <div className="text-danger">Este campo es obligatorio</div>
              )}
            {formState.errors.telefono &&
              formState.errors.telefono.type === "pattern" && (
                <div className="text-danger">
                  Por favor, ingresa un telefono de 10 digitos
                </div>
              )}
          </div>
          <div className="container p-5 justify-content-between text-end">
            <button type="button" className="btn btn-secondary btn-lg m-2" onClick={onBack}>
              Anterior{" "}
            </button>
            
            <button type="submit" className="btn btn-primary btn-lg m-2">
              Siguiente{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormContact;
