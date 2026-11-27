"use client";

import { useState } from "react";

type RatingDemoProps = {
  // "subsequent" (~) colours every star before the hovered one; "next" (+) only the one right before it.
  combinator?: "subsequent" | "next";
  labels: { reset: string; star: string };
};

// The star rating from the :has() post. Hover colouring is pure CSS (styles/writing.css), exactly the
// selector the post explains; the click only keeps the chosen rating.
export function RatingDemo({ combinator = "subsequent", labels }: RatingDemoProps) {
  const [rating, setRating] = useState(0);
  return (
    <div className="wr-demo">
      <div className={`wr-rating wr-rating--${combinator}`}>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            className={value <= rating ? "wr-rating__item is-active" : "wr-rating__item"}
            aria-label={labels.star.replace("{count}", String(value))}
            aria-pressed={value <= rating}
            onClick={() => setRating(value)}
          >
            <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden="true">
              <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z" />
            </svg>
          </button>
        ))}
      </div>
      {rating > 0 && (
        <button className="er-btn er-btn--secondary wr-demo__reset" type="button" onClick={() => setRating(0)}>
          {labels.reset}
        </button>
      )}
    </div>
  );
}
