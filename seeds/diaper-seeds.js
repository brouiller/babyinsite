const { Diaper } = require("../models");

const diaperData = [
  {
    type: "wet",
    time: "1635145920",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635147420",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635151680",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635164280",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635166500",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635176940",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635181680",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635188700",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635226200",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635245880",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635250800",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635264300",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635268320",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635275100",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635311580",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635322620",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635326940",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635339000",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635344160",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635359400",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635399720",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635406740",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635411240",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635424200",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635431700",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635444480",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635483720",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635494220",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635498900",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635510840",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635515760",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635532380",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635572640",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635582840",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635585120",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635598320",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635602400",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635617100",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635666420",
    baby_id: 1,
  },
  {
    type: "wet",
    time: "1635670800",
    baby_id: 1,
  },
  {
    type: "dry",
    time: "1635684060",
    baby_id: 1,
  },
  {
    type: "soiled",
    time: "1635688740",
    baby_id: 1,
  },
];

const seedDiaper = () => Diaper.bulkCreate(diaperData);

module.exports = seedDiaper;
