import React, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";

export default function StallImage({ filepath, alt, style }) {
  const [imageSrc, setImageSrc] = useState("");
  import(`assets/${filepath}`).then((module) => setImageSrc(module.default));
  return (
    <CardMedia component="img" sx={style || {}} image={imageSrc} alt={alt} />
  );
}
