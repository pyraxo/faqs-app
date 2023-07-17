import { useState, useEffect } from "react";

const useStarred = () => {
  const [stars, setStars] = useState(
    JSON.parse(localStorage.getItem("starred")) ?? []
  );

  const isStarred = (id) => stars.indexOf(id) > -1;
  const toggleStars = (id) =>
    setStars(
      isStarred(id) ? stars.filter((s) => s !== id) : stars.concat([id])
    );

  useEffect(() => {
    localStorage.setItem("starred", JSON.stringify(stars));
  }, [stars]);

  return [toggleStars, isStarred, stars];
};

export default useStarred;
