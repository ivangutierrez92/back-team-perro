let cities = [
  {
    name: "Buenos Aires",
    continent: "America",
    photo: "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EWRWZLV7FZEM7C24TIEPFBJCP4.jpg",
    population: 3075646,
    userId: "636c04355030f2c5cfa041a5",
  },
  {
    name: "Melbourne",
    continent: "Oceania",
    photo: "https://gostudyaus.es/wp-content/uploads/2018/10/MEL_header_2-1.jpg",
    population: 4917750,
    userId: "636c04355030f2c5cfa041a6",
  },
  {
    name: "Lanai",
    continent: "Oceania",
    photo: "https://cdn.audleytravel.com/3409/2431/79/1017242-lanai-hawaii.jpg",
    population: 3367,
    userId: "636c04355030f2c5cfa041a4",
  },
  {
    name: "Paris",
    continent: "Europe",
    photo: "https://media.traveler.es/photos/61377a978f298b3a7a5bdbaa/master/pass/98405.jpg",
    population: 2165423,
    userId: "636c04355030f2c5cfa041a7",
  },
  {
    name: "Rustenburg",
    continent: "Africa",
    photo: "https://www.retail-insight-network.com/wp-content/uploads/sites/18/2022/01/Image-1-Rustenburg-Mall.jpg",
    population: 549575,
    userId: "636c04355030f2c5cfa041a7",
  },
  {
    name: "Los Angeles",
    continent: "America",
    photo:
      "https://griffithobservatory.org/wp-content/uploads/2021/03/cameron-venti-c5GkEd-j5vI-unsplash_noCautionTape-1600x800-1638571089.jpg",
    population: 3898747,
    userId: "636c04355030f2c5cfa041a4",
  },
  {
    name: "Sydney",
    continent: "Oceania",
    photo: "https://homeiswhereyourbagis.com/wp-content/uploads/2019/11/Sydney-Opera-und-CBD-Skyline.jpg",
    population: 5231147,
    userId: "636c04355030f2c5cfa041a6",
  },
  {
    name: "Tremezzo",
    continent: "Europe",
    photo:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/314611175.jpg?k=58246d3f4f75c7c4f78805e7f978ea287317d7fee41423a0fc4c9c1ed3ed95e1&o=&hp=1",
    population: 1314,
    userId: "636c04355030f2c5cfa041a5",
  },
  {
    name: "Manadhoo",
    continent: "Asia",
    photo:
      "https://s3-ap-southeast-1.amazonaws.com/sun.assets/uploads/l_2020_04_29_120721_tyhirf9538p2vdb4oaxegqwnl6jmkscu7z1_EN_.jpg",
    population: 2041,
    userId: "636c04355030f2c5cfa041a7",
  },
  {
    name: "Singapore",
    continent: "Asia",
    photo: "https://s30876.pcdn.co/wp-content/uploads/Singapore.jpg.optimal.jpg",
    population: 5637000,
    userId: "636c04355030f2c5cfa041a4",
  },
  {
    name: "Caibarién",
    continent: "America",
    photo: "https://images.visitarcuba.org/Cangrejo-Caibrien.jpg",
    population: 40284,
    userId: "636c04355030f2c5cfa041a5",
  },
  {
    name: "Puerto Morelos",
    continent: "America",
    photo: "https://www.delphinusworld.com/hubfs/destacada-puerto-morelos.png",
    population: 31500,
    userId: "636c04355030f2c5cfa041a6",
  },
];

require("dotenv").config();
require("../database");
const City = require("../../models/City");

cities.forEach(element => {
  City.create({
    name: element.name,
    continent: element.continent,
    photo: element.photo,
    population: element.population,
    userId: element.userId,
  });
});
