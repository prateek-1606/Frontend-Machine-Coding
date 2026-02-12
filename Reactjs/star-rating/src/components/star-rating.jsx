import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const StarRating = ({ ratingLength }) => {
  const [rating, setRating] = useState(-1);
  const [hoveringIndex, setHoveringIndex] = useState(-1);

  const renderStar = (index) => {
    if (rating === -1 && hoveringIndex !== -1) {
      if (hoveringIndex <= index) return <FaRegStar fontSize={36} />;
      else return <FaStar fontSize={36} />;
    }

    if (rating <= index) return <FaRegStar fontSize={36} />;
    else if (rating > index) return <FaStar fontSize={36} color="blue" />;
  };

  return (
    <div>
      {new Array(ratingLength).fill(" ").map((_, index) => {
        return (
          <span
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              if (rating === index + 1) {
                setRating(-1);
                return;
              }
              setRating(index + 1);
            }}
            onMouseOver={() => {
              setHoveringIndex(index + 1);
            }}
            onMouseLeave={() => {
              setHoveringIndex(-1);
            }}
          >
            {renderStar(index)}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
