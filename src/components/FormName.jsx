import React from "react";
import { useForm } from "react-hook-form";

const FormName = () => {
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container text-center mt-5">
        <h5 className="text-secondary text-center mb-5">
          Para comenzar compártenos tus datos, estos son necesarios para poder
          generar tu cotización y contratación si así lo deseas.
        </h5>
      </div>
      <div className="container mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              htmlFor="nombre"
              className="form-label fw-bold text-body-secondary"
            >
              Nombre
            </label>
            <input
              type="text"
              className="form-control border-secondary "
              name="nombre"
              placeholder="Escribe tu nombre"
              {...register("nombre", { required: true })}
            />
            {formState.errors.nombre && (
              <div className="text-danger" >
                Este campo es obligatorio
              </div>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="codigoPostal"
              className="form-label fw-bold text-body-secondary"
            >
              Código Postal
            </label>
            <input
              type="text"
              className="form-control border-secondary"
              name="codigoPostal"
              placeholder="Escribe tu CP"
              {...register("codigoPostal", {
                required: true,
                pattern: /^[0-9]{5}$/,
              })}
            />
            {formState.errors.codigoPostal &&
              formState.errors.codigoPostal.type === "required" && (
                <div className="text-danger" >
                  Este campo es obligatorio
                </div>
              )}
            {formState.errors.codigoPostal &&
              formState.errors.codigoPostal.type === "pattern" && (
                <div className="text-danger" >
                  Por favor, ingresa un código postal válido de 5 números
                </div>
              )}
          </div>
          <div className="container p-5 text-end">
            <button type="submit" className="btn btn-primary btn-lg">
              Siguiente{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormName;
