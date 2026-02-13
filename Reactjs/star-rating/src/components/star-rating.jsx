import { useState } from "react";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

const StarRating = ({ ratingLength = 5, value = 0 }) => {
  const [rating, setRating] = useState(value);
  const [hoverValue, setHoverValue] = useState(-1);

  const getStarValue = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percent = offsetX / rect.width;

    return percent <= 0.5 ? index + 0.5 : index + 1;
  };

  const renderStar = (starIndex) => {
    const isHovering = hoverValue !== -1;
    const displayValue = isHovering ? hoverValue : rating;
    const color = isHovering ? "black" : "blue";

    if (displayValue >= starIndex) {
      return <FaStar fontSize={36} color={color} />;
    } else if (displayValue >= starIndex - 0.5) {
      return <FaStarHalfAlt fontSize={36} color={color} />;
    } else {
      return <FaRegStar fontSize={36} color={isHovering ? "black" : "gray"} />;
    }
  };

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: ratingLength }).map((_, index) => {
        const starIndex = index + 1;

        return (
          <span
            key={index}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              const newValue = getStarValue(e, index);
              setRating(newValue === rating ? 0 : newValue);
            }}
            onMouseMove={(e) => {
              setHoverValue(getStarValue(e, index));
            }}
            onMouseLeave={() => setHoverValue(-1)}
          >
            {renderStar(starIndex)}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
