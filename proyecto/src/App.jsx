// import { AppRouter } from "./router/AppRouter";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React from 'react';

// function App() {
//   return (
//     <>
//       <div style={{ background: " #F2E9E4" }}>
//         <AppRouter />
//       </div>
//     </>
//   );
// }

// export default App;
import { AppRouter } from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import "./styles/modales.css";

function App() {
  return (
    <AuthProvider>
      <div style={{ background: " #F2E9E4" }}>
        <AppRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
