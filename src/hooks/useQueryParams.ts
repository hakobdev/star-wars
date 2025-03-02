import { useLocation } from "react-router-dom";
import { URLSearchParams } from "url";

const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

export default useQueryParams;
