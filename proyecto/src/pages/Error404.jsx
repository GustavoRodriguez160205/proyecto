import React from "react";
import "../styles/error404.css";

const ErrorPage = () => {
  const backgroundImageUrl =
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/2ce6bd34096430.56c3e8bb34fe8.gif"; // Reemplaza con la URL de tu imagen
  //png.pngtree.com/png-clipart/20220510/original/pngtree-internet-network-warning-404-error-page-or-file-not-found-for-png-image_7693606.png
  https: return (
    <div
      className="error-page"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="overlay"></div>
      <div className="error-content">
        <h1>404</h1>
        <p>Página no encontrada</p>
      </div>
    </div>
  );
};

export default ErrorPage;
