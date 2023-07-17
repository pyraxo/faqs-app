import React from "react";

import IconButton from "@mui/material/IconButton";
import Star from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
import StarOutline from "@mui/icons-material/StarOutline";

export default function StarButton({ handleClick, isStarred }) {
  return (
    <IconButton aria-label="star" size="small" onClick={handleClick}>
      {isStarred() ? (
        <Star sx={{ color: yellow[700] }} />
      ) : (
        <StarOutline color="action" />
      )}
    </IconButton>
  );
}
