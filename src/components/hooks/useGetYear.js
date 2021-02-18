import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getYear } from "../../actions/CalendarioActions";

export const useGetYear = () => {
  const dispatch = useDispatch();
  const [year, setYear] = useState();

  useEffect(() => {
    const data = new Date().getFullYear();
    setYear(data);

    dispatch(getYear(data));
  }, [dispatch]);

  return { year };
};
