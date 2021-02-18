import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDate } from "date-fns";
import { getDays } from "../../actions/CalendarioActions";
import { eachDayOfInterval } from "date-fns";
import { useSelector } from "react-redux";

export const useGetDays = () => {
  const year = useSelector((state) => state.data.year);
  const months = useSelector((state) => state.data.months);

  const [diasCalendario, setDiasCalendario] = useState();

  const dispatch = useDispatch();
  const [diaActual, setDiaActual] = useState();

  useEffect(() => {
    const dateObj = new Date();
    const day = dateObj.getUTCDate();
    setDiaActual(day);
  }, []);

  if (diaActual) {
    dispatch(getDays(diasCalendario));
  }

  useEffect(() => {
    let mesAnterior;
    if (months === 1) {
      mesAnterior = 0;
    } else {
      mesAnterior = months - 1;
    }
    const totalDiasMes = eachDayOfInterval({
      start: new Date(year, mesAnterior, -3),
      end: new Date(year, months, 0),
    });

    const NumerosDias = [];

    totalDiasMes.forEach((element) => {
      NumerosDias.push(getDate(element));
    });

    if (NumerosDias) {
      setDiasCalendario(NumerosDias);
    }
  }, [months, year]);

  return { diaActual };
};
