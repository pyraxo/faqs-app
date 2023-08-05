import React from "react";
import { Navigate } from "react-router-dom";
import useLocalStorage from "hooks/useLocalStorage";

export default function VersionCheck() {
  const [userCode] = useLocalStorage("userCode", "");
  const isRightVersion =
    String((parseInt(userCode) % 2) + 1) ===
    window.location.pathname.split("/")[3];

  return isRightVersion ? (
    <></>
  ) : (
    <Navigate to={`/experiment/${(parseInt(userCode) % 2) + 1}`} replace />
  );
}
