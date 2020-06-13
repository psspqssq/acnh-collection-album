import "dotenv/config";
import cron from "node-cron";
import axios from "axios";
import "#root/db/connection";
import Houseware from "#root/db/models/Houseware";

const axiosAC = axios.create({
  baseURL: process.env.ACNH_API_URL
});

axiosAC.interceptors.response.use((res) => {
  //houseware object contains the current key on the map function
  res = Object.keys(res.data).map((houseware) => ({
    name: houseware,
    data: res.data[houseware]
  }));
  return res;
});

const seed = async () => {
  const housewares = await axiosAC.get("houseware");
  await Houseware.insertMany(housewares, function (error, docs) {
    console.error(error);
  });
  console.log("seeded");
};

seed();

/*
cron.schedule("0 * * * * *", () => {
  console.log("cron working");
});*/
