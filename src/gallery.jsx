import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import image1 from "./images_random/image1.jpg";
import image2 from "./images_random/image2.jpg";
import image3 from "./images_random/image3.JPG";
import image4 from "./images_random/image4.JPG";
import image5 from "./images_random/image5.jpg";
import image6 from "./images_random/image6.jpg";
import image7 from "./images_random/image7.jpg";
import image8 from "./images_random/image8.jpg";
import image9 from "./images_random/image9.JPG";
import image10 from "./images_random/image10.JPG";
import image11 from "./images_random/image11.jpg";
import image12 from "./images_random/image12.jpg";
import image13 from "./images_random/image13.jpg";
import image14 from "./images_random/image14.jpg";
import image15 from "./images_random/image15.jpg";
import image17 from "./images_random/image17.jpg";
import image19 from "./images_random/image19.jpg";
import image20 from "./images_random/image20.jpg";
import image21 from "./images_random/image21.jpg";
import image22 from "./images_random/image22.jpeg";
import image23 from "./images_random/image23.jpeg";
import image24 from "./images_random/image24.jpeg";
import image25 from "./images_random/image25.jpeg";
import image26 from "./images_random/image26.jpeg";
import image27 from "./images_random/image27.jpg";
import image29 from "./images_random/image29.jpeg";
import image28 from "./images_random/image28.jpg";
import image30 from "./images_random/image30.jpg";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Gallery() {
  const isPhone = useMediaQuery("(max-width:600px)");

  return (
    <ImageList
      sx={{ width: "100%", height: "100%" }}
      variant="quilted"
      cols={isPhone ? 2 : 4} // Adjust columns based on screen size
      rowHeight={isPhone ? 200 : 400}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 400, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: image30,
    title: "Image 17",
  },
  {
    img: image23,
    title: "Image 23",
  },
  {
    img: image29,
    title: "Image 29",
  },
  {
    img: image3,
    title: "Image 3",
  },
  {
    img: image5,
    title: "Image 5",
  },
  {
    img: image22,
    title: "Image 22",
  },
  {
    img: image26,
    title: "Image 26",
  },
  {
    img: image25,
    title: "Image 25",
  },
  {
    img: image28,
    title: "Image 28",
  },
  {
    img: image24,
    title: "Image 24",
  },
  {
    img: image27,
    title: "Image 27",
  },
  {
    img: image9,
    title: "Image 9",
  },
  {
    img: image7,
    title: "Image 7",
  },
  {
    img: image19,
    title: "Image 19",
  },
  {
    img: image1,
    title: "Image 1",
  },
  {
    img: image8,
    title: "Image 8",
  },
  {
    img: image10,
    title: "Image 10",
  },
  {
    img: image11,
    title: "Image 11",
  },
  {
    img: image20,
    title: "Image 20",
  },
  {
    img: image21,
    title: "Image 21",
  },
  {
    img: image12,
    title: "Image 12",
  },
  {
    img: image13,
    title: "Image 13",
  },
  {
    img: image14,
    title: "Image 14",
  },
  {
    img: image15,
    title: "Image 15",
  },
  {
    img: image17,
    title: "Image 17",
  },
];

export default Gallery;
