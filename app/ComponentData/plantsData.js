'use client'
import React from 'react'
export { ToastContainer } from 'react-toastify'
export const plantData=[{
    plantName: "Astrantia",
    kind: "Flowerly Plants",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-flowers-for-garden-astrantia-1674846661.jpeg?crop=1xw:1xh;center,top&resize=980:*",
    costCategory: "60",
    type: "Artificial"
  },
  {
    plantName: "Allium",
    kind: "Flowerly Plants",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-garden-flowers-purple-allium-1674847068.jpeg?crop=1xw:1xh;center,top&resize=980:*",
    costCategory: "30",
    type: "Outdoor"
  },
  {
    plantName: "Angelonia",
    kind: "Flowerly Plants",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-flowers-for-garden-angelonia-1674847372.jpeg?crop=1xw:1xh;center,top&resize=980:*",
    costCategory: "40",
    type: "Indoor"
  },
  {
    plantName: "Aster",
    kind: "Flowerly Plants",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/aster-types-of-flowers-1579719549.jpg?crop=1xw:1xh;center,top&resize=980:*",
    costCategory: "50",
    type: "Artificial"
  },
  {
    plantName: "Azalea",
    kind: "Flowerly Plants",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-flowers-azalea-shrub-1674847680.jpeg?crop=1xw:1xh;center,top&resize=980:*",
    costCategory: "90",
    type: "Outdoor"
  },
  {
    plantName: "Balloon Flower",
    kind: "Flowerly Plants",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-garden-flowers-balloon-flowers-1674847923.jpeg?crop=1xw:1xh;center,top&resize=980:*",
    costCategory: "30",
    type: "Outdoor"
  },
  {
    plantName: "Begonia",
    kind: "Flowerly Plants",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-flowers-for-garden-begonia-1674848132.jpeg?crop=1xw:1xh;center,top&resize=980:*",
    costCategory: "20",
    type: "Outdoor"
  },
  {
    plantName: "Black-eyed Susan",
    kind: "Flowerly Plants",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-flowers-for-garden-black-eyed-susans-1674848363.jpeg?crop=1xw:1xh;center,top&resize=980:*",
    costCategory: "50",
    type: "Outdoor"
  },
  {
    plantName: "Butterfly Bush",
    kind: "Flowerly Plants",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-flowers-butterfly-bush-1674848710.jpeg?crop=1xw:1xh;center,top&resize=980:*",
    costCategory: "70",
    type: "Outdoor"
  },
  {
    plantName: "Caladium",
    kind: "Flowerly Plants",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1164723437-612x612-1612201968.jpg?crop=1xw:1xh;center,top&resize=980:*",
    costCategory: "100",
    type: "Outdoor"
  },
  {
    plantName: "Rambutan",
    kind: "Fruit Bearing Plant",
    imgLink: "https://www.onmanorama.com/content/dam/mm/en/lifestyle/green/image/fruit-trees/rambutan.jpg.image.784.410.jpg",
    costCategory: "120",
    type: "Outdoor"
  },
  {
    plantName: "Sapodilla",
    kind: "Fruit Bearing Plant",
    imgLink: "https://www.onmanorama.com/content/dam/mm/en/lifestyle/green/image/fruit-trees/sapotta.jpg.image.784.410.jpg",
    costCategory: "100",
    type: "Indoor"
  },
  {
    plantName: "Mangosteen",
    kind: "Fruit Bearing Plant",
    imgLink: "https://www.onmanorama.com/content/dam/mm/en/lifestyle/green/image/fruit-trees/mangosteen.jpg.image.784.410.jpg",
    costCategory: "50",
    type: "Artificial"
  },
  {
    plantName: "Star Gooseberry",
    kind: "Fruit Bearing Plant",
    imgLink: "https://www.onmanorama.com/content/dam/mm/en/lifestyle/green/image/fruit-trees/gooseberry.jpg.image.784.410.jpg",
    costCategory: "10",
    type: "Indoor"
  },
  {
    plantName: "Calamansi",
    kind: "Fruit Bearing Plant",
    imgLink: "https://unbeleafable.ph/wp-content/uploads/2022/01/calamansi-turmeric-leaves-on-banana-leaf-2021-09-03-20-54-57-utc-1-1024x683.jpg",
    costCategory: "90",
    type: "Outdoor"
  },
  {
    plantName: "Tomato",
    kind: "Fruit Bearing Plant",
    imgLink: "https://unbeleafable.ph/wp-content/uploads/2022/01/tomato-plant-2021-09-30-18-35-26-utc-1-1024x706.jpg",
    costCategory: "30",
    type: "Indoor"
  },
  {
    plantName: "Thimble Cactus",
    kind: "Cacti",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/thimble-cactus-royalty-free-image-1695063544.jpg?crop=1.00xw:0.834xh;0,0.115xh&resize=980:*",
    costCategory: "25",
    type: "Indoor"
  },
  {
    plantName: "Golden Barrel Cactus",
    kind: "Cacti",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-cactus-golden-barrel-1658773010.jpeg?crop=0.376xw:0.707xh;0.624xw,0&resize=980:*",
    costCategory: "20",
    type: "Outdoor"
  },
  {
    plantName: "Peanut Cactus",
    kind: "Cacti",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/echinopsis-chamaecereus-peanut-cactus-in-clay-pot-royalty-free-image-1695063977.jpg?crop=0.53308xw:1xh;center,top&resize=980:*",
    costCategory: "25",
    type: "Indoor"
  },
  {
    plantName: "Mistletoe Cactus",
    kind: "Cacti",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/rhipsalis-horride-royalty-free-image-1695118512.jpg?crop=0.53308xw:1xh;center,top&resize=980:*",
    costCategory: "45",
    type: "Outdoor"
  },
  {
    plantName: "Ric Rac Cactus",
    kind: "Cacti",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/ric-rac-cactus-plant-epiphyllum-anguliger-royalty-free-image-1695118897.jpg?crop=1xw:0.9375xh;center,top&resize=980:*",
    costCategory: "97",
    type: "Artificial"
  },
  {
    plantName: "Saguaro Cactus",
    kind: "Cacti",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-cactus-saguaro-carnegiea-gigantea-1658766944.jpeg?crop=1.00xw:0.770xh;0,0.0493xh&resize=980:*",
    costCategory: "38",
    type: "Outdoor"
  },
  {
    plantName: "Fairy Castle Cactus",
    kind: "Cacti",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-cactus-fairycastle-acanthocereus-tetragonus-1658767825.jpeg?crop=0.466xw:0.877xh;0.534xw,0.123xh&resize=980:*",
    costCategory: "40",
    type: "Indoor"
  },
  {
    plantName: "Feather Cactus",
    kind: "Cacti",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-cactus-feather-mammillaria-plumosa-1658765952.jpeg?crop=0.932xw:0.778xh;0.0678xw,0.188xh&resize=980:*",
    costCategory: "75",
    type: "Artificial"
  },
  {
    plantName: "Old Lady Cactus",
    kind: "Cacti",
    imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-cactus-old-lady-mammillaria-hahniana-1658765320.jpeg?crop=0.710xw:0.882xh;0.160xw,0.0672xh&resize=980:*",
    costCategory: "100",
    type: "Outdoor"
  },
  {
    plantName: "Australian Tree Fern",
    kind: "Fern",
    imgLink: "https://www.gardendesign.com/pictures/images/263x300Exact_44x0/site_3/australian-tree-fern-cyathea-cooperi-shutterstock-com_17258.jpg",
    costCategory: "90",
    type: "Indoor"
  },
  {
    plantName: "Autumn Fern",
    kind: "Fern",
    imgLink: "https://www.gardendesign.com/pictures/images/263x300Exact_22x0/site_3/autumn-fern-dryopteris-erythrosora-garden-design_17259.jpg",
    costCategory: "20",
    type: "Outdoor"
  },
  {
    plantName: "Christmas Fern",
    kind: "Fern",
    imgLink: "https://www.gardendesign.com/pictures/images/263x300Exact_12x0/site_3/christmas-fern-polystichum-acrostichoides-shutterstock-com_17263.jpg",
    costCategory: "32",
    type: "Outdoor"
  },
  {
    plantName: "Cinnamon Fern",
    kind: "Fern",
    imgLink: "https://www.gardendesign.com/pictures/images/263x300Exact_0x100/site_3/cinnamon-fern-osmundastrum-cinnamomeum-shutterstock-com_17264.jpg",
    costCategory: "51",
    type: "Indoor"
  },
  {
    plantName: "Hairy Lip Fern",
    kind: "Fern",
    imgLink: "https://www.gardendesign.com/pictures/images/263x300Exact_0x100/site_3/lip-fern-cheilanthes-lanosa-shutterstock-com_17292.jpg",
    costCategory: "57",
    type: "Outdoor"
  },
  {
    plantName: "Hart's Tongue Fern",
    kind: "Fern",
    imgLink: "https://www.gardendesign.com/pictures/images/263x300Exact/site_3/hart-s-tongue-fern-asplenium-scolopendrium-shutterstock-com_17265.jpg",
    costCategory: "100",
    type: "Indoor"
  },
  {
    plantName: "Holly Fern",
    kind: "Fern",
    imgLink: "https://www.gardendesign.com/pictures/images/263x300Exact_36x0/site_3/holly-fern-cyrtomium-falcatum-shutterstock-com_17266.jpg",
    costCategory: "200",
    type: "Artificial"
  }
  ]
