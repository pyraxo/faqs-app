import { useState } from "react";

import stallInfos from "assets/stalls.json";

const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const regenerate = () => {
  const isClosed = randomNum(1, 10) === 1;
  const queueLength = isClosed ? 0 : randomNum(1, 10);
  return { queueLength, waitTime: queueLength * 2, isClosed };
};

const useStatus = () => {
  const [status, setStatus] = useState(
    stallInfos.map(({ name }) => ({ name, ...regenerate() }))
  );

  const refreshStatus = () => {
    setStatus(stallInfos.map((info) => ({ ...info, ...regenerate() })));
  };

  const isClosed = (id) => stallInfos[id].isClosed;

  return [status, refreshStatus, isClosed];
};

export default useStatus;
