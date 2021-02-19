import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getMonth } from "../../actions/CalendarioActions";

export const useGetMonths = () => {
  const dispatch = useDispatch();
  const [month, setMonth] = useState();

  useEffect(() => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth();

    setMonth(month);
    dispatch(getMonth(month));
  }, [dispatch]);

  return { month, setMonth };
};
