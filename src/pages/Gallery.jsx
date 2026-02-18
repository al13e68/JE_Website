import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { object } from "framer-motion/client";

const imageModules = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png}", {
  eager: true,
  import:"default",
});

const thumbModules = import.meta.glob("../assets/gallery/thumbnail/*.{jpg,jpeg,png}", {
   eager: true,
  import:"default",
});

const images = Object.values(imageModules).map((fullImage, i) => ({
  fullImage,
  thumb: Object.values(thumbModules)[i],
}));

function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Gallery</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img.thumb}
            alt=""
            loading="lazy"
            style={{
              width: "100%",
              borderRadius: "12px",
              cursor: "pointer"
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <Lightbox
        slides={images.map(img => ({ src: img.fullImage }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default Gallery;
