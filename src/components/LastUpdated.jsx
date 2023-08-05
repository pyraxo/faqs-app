import React from "react";
import Typography from "@mui/material/Typography";
import TimeAgo from "react-timeago";
import englishStrings from "react-timeago/lib/language-strings/en-short";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const formatter = buildFormatter(englishStrings);

export default function LastUpdated({ lastUpdated }) {
  return (
    <Typography sx={{ fontSize: "1.5vh", alignSelf: "center" }}>
      waiting times last updated:{" "}
      {<TimeAgo date={lastUpdated} minPeriod={60} formatter={formatter} />} ago
    </Typography>
  );
}
