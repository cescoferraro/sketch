import { Location } from "history";
import { NavigateFunction } from "react-router-dom";
import { useEffect } from "react";

export function useRedirectToHomeIfNoStateEffect(
  location: Location,
  history: NavigateFunction
) {
  useEffect(() => {
    if (location.state === undefined) history("/");
  }, [location, history]);
}
