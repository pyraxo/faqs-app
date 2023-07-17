import { useState } from "react";

import stallInfos from "assets/stalls.json";

const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const regenerate = () => {
  const queueLength = randomNum(1, 10);
  return { queueLength, waitTime: queueLength * 2 };
};

const useStatus = () => {
  const [status, setStatus] = useState(
    stallInfos.map(({ name }) => ({ name, ...regenerate() }))
  );

  const refreshStatus = () => {
    setStatus(stallInfos.map((info) => ({ ...info, ...regenerate() })));
  };

  return [status, refreshStatus];
};

export default useStatus;
