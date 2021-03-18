import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

export const useHeaderFecha = () => {
  const [fechaInicial, setFechaInicial] = useState();
  //   const month = useSelector((state) => state.data.months);

  useEffect(() => {
    const fechaActual = new Date();

    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    setFechaInicial(fechaActual.toLocaleDateString("es-ES", options));
  }, []);

  return { fechaInicial };
};
