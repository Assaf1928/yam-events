const { SSL_OP_TLS_D5_BUG } = require("constants");
const express = require("express");
const fs = require("fs");
const router = new express.Router();
const app = express();

const data = [
  {
    id: 1,
    name: "alternativeEquipment",
    path: "../src/image/subCategory/alternativeEquipment/",
    clientNeededPath: "src/image/subCategory/alternativeEquipment/",
    subs: [
      {
        id: 1,
        name: "beanbag/", //folder name
        title: "פופים",
      },
      {
        id: 2,
        name: "footstool/",
        title: "הדומים",
      },
      {
        id: 3,
        name: "mats/",
        title: "מחצלות",
      },
      {
        id: 4,
        name: "photons/",
        title: "פוטונים",
      },
      {
        id: 5,
        name: "pillows/",
        title: "כריות",
      },
    ],
  },
  {
    id: 2,
    name: "furniture",
    path: "../src/image/subCategory/furniture/",
    clientNeededPath: "src/image/subCategory/furniture/",
    subs: [
      {
        id: 1,
        name: "buffets/",
        title: "מזנונים",
      },
      {
        id: 2,
        name: "chairs/",
        title: "כסאות",
      },
      {
        id: 3,
        name: "tables/",
        title: "שולחנות",
      },
    ],
  },
  {
    id: 3,
    name: "servingDishes",
    path: "../src/image/subCategory/servingDishes/",
    clientNeededPath: "src/image/subCategory/servingDishes/",
    subs: [
      {
        id: 1,
        name: "barBowls/",
        title: "קערות בר",
      },
      {
        id: 2,
        name: "supplementaryDishes/",
        title: "כלים נלווים",
      },
      {
        id: 3,
        name: "glasses/",
        title: "כוסות",
      },
      {
        id: 4,
        name: "cutlery/",
        title: "סכו'ם",
      },
      {
        id: 5,
        name: "plates/",
        title: "צלחות",
      },
      {
        id: 6,
        name: "pots/",
        title: "סירים",
      },
      {
        id: 7,
        name: "salters/",
        title: "סלטרים",
      },
      {
        id: 8,
        name: "servingBowls/",
        title: "קערות הגשה",
      },
      {
        id: 9,
        name: "chafingDish/",
        title: "שיפינגים",
      },
    ],
  },
  {
    id: 4,
    name: "supplementaryEquipment",
    path: "../src/image/subCategory/supplementaryEquipment/",
    clientNeededPath: "src/image/subCategory/supplementaryEquipment/",
    subs: [
      {
        id: 1,
        name: "airConditioning/",
        title: "מיזוג",
      },
      {
        id: 2,
        name: "curtains/",
        title: "פרגודים",
      },
      {
        id: 3,
        name: "heatingAndCoolingUtensils/",
        title: "כלי חימום וקירור",
      },
      {
        id: 4,
        name: "napkins/",
        title: "מפיות",
      },
      {
        id: 5,
        name: "tents/",
        title: "אוהלים",
      },
      {
        id: 6,
        name: "tableCloths/",
        title: "מפות",
      },
      {
        id: 7,
        name: "parasols/",
        title: "שמשיות",
      },
    ],
  },
];

router.get("/category", async (req, res) => {
  const param = req.query.name;
  //building URL
  let url = __dirname.replace(/\\/g, "/");
  url = url.replace("server/routers", "");

  try {
    await fs.readdir(url + `/src/image/${param}`, (err, files) => {
      if (err) console.log(err);
      else {
        res.status(201).send(files);
      }
    });
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

router.get("/sub", async (req, res) => {
  try {
    const id = req.query.id;
    const subid = req.query.subId;
    let category = await data.find((category) => category.id == id);
    let sub = await category.subs.find((sub) => sub.id == subid);

    //reciving current location path
    //removing the backend/routers so we can get the base url.
    // e.x. C:/Users/asaf/Desktop/yam-events/ -- > base url
    var publicDir = require("path").join(__dirname, "/public");
    publicDir = require("path").resolve(__dirname, "../../");
    publicDir = publicDir.replace(/\\/g, "/");

    const url = publicDir + "/" + category.clientNeededPath + sub.name;

    await fs.readdir(url, (err, files) => {
      if (err) console.log(err);
      else {
        res.status(201).send({ files, path: url, title: sub.title });
      }
    });
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

module.exports = router;
