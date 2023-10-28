import React from "react";
const string = "Esto es un texto";
const number = 12345;
const array = ["Curso", "Neaves", 1, 2];
const NavBar = () => {
  return (
    <>
      <a className="navbar-brand" href="#"></a>
      <nav className="navbar navbar-expand-lg bg-body-primary bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="./public/logohdigreenrbg.svg"
              alt="Logo"
              width="80"
              height="80"
              className="d-inline-block align-text-center"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a className="nav-link active text-light" aria-current="page" href="#">
                  Cotizador
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">
                  Guardadas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">
                  Pólizas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">
                  Sitio Web
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
