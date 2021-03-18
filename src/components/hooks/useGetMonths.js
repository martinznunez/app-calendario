import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getMonth } from "../../actions/CalendarioActions";

export const useGetMonths = () => {
  const dispatch = useDispatch();
  const [monthPrevious, setMonthPrevious] = useState();

  useEffect(() => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth();

    setMonthPrevious(month);
    dispatch(getMonth(month));
  }, [dispatch]);

  return { monthPrevious, setMonthPrevious };
};
