import image5 from './assets/5.jpg'
import image6 from './assets/6.jpg'
import image1 from './assets/1.jpg'

import image9 from './assets/9.jpg'
import image7 from './assets/7.jpg'
import image2 from './assets/2.jpg'
import image8 from './assets/8.jpg'
import image15 from './assets/15.JPG'
import image16 from './assets/16.JPG'
import image17 from './assets/Cat.jpeg'
import image18 from './assets/clean.jpeg'
import image19 from './assets/18.jpg'
import image20 from './assets/19.jpg'
import image21 from './assets/17.jpg'
import image22 from './assets/20.jpeg'
import image23 from './assets/21.jpg'
import image24 from './assets/22.jpg'
import image25 from './assets/23.jpeg'
import image26 from './assets/24.jpeg'

// import art from './assets/artbg.jpg'
const Art = () => {
  return (
    <div className="Art">
      <img src={image5} className="art-image"></img>
      <img src={image6} className="art-image"></img>
      <img src={image26} className="art-image"></img>
      <img src={image22} className="art-image"></img>

      <img src={image2} className="art-image"></img>
      <img src={image15} className="art-image"></img>
      <img src={image25} className="art-image"></img>

      <img src={image17} className="art-image"></img>
      <img src={image21} className="art-image"></img>
      <img src={image18} className="art-image"></img>

      <img src={image8} className="art-image"></img>
      <img src={image24} className="art-image"></img>
      <img src={image1} className="art-image"></img>
    </div>
  )
}
// import * as React from 'react'
// import ImageList from '@mui/material/ImageList'
// import ImageListItem from '@mui/material/ImageListItem'

// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   }
// }

// function Art() {
//   return (
//     <ImageList
//       sx={{ width: '100%', height: '100%' }}
//       variant="quilted"
//       cols={4}
//       rowHeight={200}
//     >
//       {itemData.map((item) => (
//         <ImageListItem
//           key={item.img}
//           cols={item.cols || 1}
//           rows={item.rows || 1}
//         >
//           <img
//             {...srcset(item.img, 121, item.rows, item.cols)}
//             alt={item.title}
//             loading="lazy"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   )
// }

// const itemData = [
//   {
//     img: image5,
//     title: 'Breakfast',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: image6,
//     title: 'Burger',
//   },
//   {
//     img: image26,
//     title: 'Camera',
//   },
//   {
//     img: image22,
//     title: 'Coffee',
//     cols: 2,
//   },
//   {
//     img: image2,
//     title: 'Hats',
//     cols: 2,
//   },
//   {
//     img: image15,
//     title: 'Honey',
//     author: '@arwinneil',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     cols: 2,
//   },
// ]

export default Art
