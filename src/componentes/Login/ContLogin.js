import React, { useState } from "react";
import Login from './Login';
import Portada from './Portada';

export default function ContLogin() {
  const [conectado, setConectado] = useState(false);

  const desbloquear = (valor) => {
    console.log("valor", valor);
    setConectado(valor);
  };

  return conectado ? <Portada /> : <Login desbloquear={desbloquear} />;
}
