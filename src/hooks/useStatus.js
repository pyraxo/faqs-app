import { useState } from "react";

const useStatus = () => {
  const [status, setStatus] = useState({});

  return [status, setStatus];
};

export default useStatus;
