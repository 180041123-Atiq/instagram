export const fetchImages = async () => {
    const response = await fetch('https://unsplash.it/list');
    const images = await response.json();
  
    return images;
  };
  
  export const getImageFromId = id =>
    `https://unsplash.it/${600}/${600}?image=${id}`;
  


/* eslint-disable global-require */

const images = {
    1: require('../assets/1.jpg'),
    2: require('../assets/2.jpg'),
    3: require('../assets/3.jpg'),
    4: require('../assets/4.jpg'),
    5: require('../assets/5.jpg'),
    6: require('../assets/6.jpg'),
    7: require('../assets/7.jpg'),
    8: require('../assets/8.jpg'),
    9: require('../assets/9.jpg'),
    10: require('../assets/10.jpg'),
    11: require('../assets/11.jpg'),
  };
  
  export const getImage = id => images[id];
  