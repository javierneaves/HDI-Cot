import React from "react";

const FormName = () => {
  return (
    <>
      <div className="container text-center mt-5">
        <h5 className="text-secondary text-center mb-5">
          Para comenzar compártenos tus datos, estos son necesarios para poder
          generar tu cotización y contratación si así lo deseas.
        </h5>
      </div>
      <div className="container mt-5">
        <form>
          <div className="mb-3">
            <label htmlFor="formNombre" className="form-label fw-bold text-body-secondary">
              Nombre
            </label>
            <input
              type="text"
              className="form-control border-secondary "
              id="formNombre"
              placeholder="Escribe tu nombre"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formCp" className="form-label fw-bold text-body-secondary">
              Código Postal
            </label>
            <input
              type="text"
              className="form-control border-secondary"
              id="formCp"
              placeholder="Escribe tu CP"
            />
          </div>
        </form>
        <div className="container p-5 text-end">
          <button type="button" className="btn btn-primary btn-lg">Siguiente </button>
        </div>
                  
      </div>
    </>
  );
};

export default FormName;
