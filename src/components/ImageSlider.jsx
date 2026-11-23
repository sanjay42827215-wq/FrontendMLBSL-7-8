import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-2xl mx-auto overflow-hidden rounded-xl">
      <img
        key={current}
        src={images[current]}
        alt="Slide"
        className="w-full h-64 object-cover"
      />
    </div>
  );
}

export default ImageSlider;