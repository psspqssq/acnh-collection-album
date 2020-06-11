import mongoose from "mongoose";

export const nameSchema = new mongoose.Schema(
  {
    "name-USen": String,
    "name-EUen": String,
    "name-EUde": String,
    "name-EUes": String,
    "name-USes": String,
    "name-EUfr": String,
    "name-USfr": String,
    "name-EUit": String,
    "name-EUnl": String,
    "name-CNzh": String,
    "name-TWzh": String,
    "name-JPja": String,
    "name-KRko": String,
    "name-EUru": String,
  },
  { _id: false }
);
export const dataSchema = new mongoose.Schema(
  {
    variant: String,
    "body-title": String,
    pattern: String,
    "pattern-title": String,
    isDIY: Boolean,
    canCustomizeBody: Boolean,
    canCustomizePattern: Boolean,
    "kit-cost": Number,
    "color-1": String,
    "color-2": String,
    size: String,
    "miles-price": Number,
    source: String,
    "source-detail": String,
    version: String,
    "hha-concept-1": String,
    "hha-concept-2": String,
    "hha-series": String,
    "hha-set": String,
    isInteractive: String,
    tag: String,
    isOutdoor: Boolean,
    "speaker-type": String,
    "lighting-type": String,
    isCatalog: String,
    "file-name": String,
    "variant-id": String,
    "internal-id": Number,
    name: nameSchema,
    "buy-price": Number,
    "sell-price": Number,
    image_uri: String,
  },
  { _id: false }
);

export const housewareSchema = new mongoose.Schema({
  name: String,
  data: [dataSchema],
});

const Houseware = mongoose.model("Item-Houseware", housewareSchema);

export default Houseware;
