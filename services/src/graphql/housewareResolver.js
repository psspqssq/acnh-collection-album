import * as Query from "./builtInTypes/Query";

const resolvers = {
  Query,
  Houseware: {
    id: (housewareObj) => housewareObj._id
  },
  HousewareData: {
    bodyTitle: (dataSchemaobj) => dataSchemaobj["body-title"],
    patternTitle: (dataSchemaobj) => dataSchemaobj["pattern-title"],
    kitCost: (dataSchemaobj) => dataSchemaobj["kit-cost"],
    color1: (dataSchemaobj) => dataSchemaobj["color-1"],
    color2: (dataSchemaobj) => dataSchemaobj["color-2"],
    milesPrice: (dataSchemaobj) => dataSchemaobj["miles-price"],
    sourceDetail: (dataSchemaobj) => dataSchemaobj["source-detail"],
    hhaConcept1: (dataSchemaobj) => dataSchemaobj["hha-concept-1"],
    hhaConcept2: (dataSchemaobj) => dataSchemaobj["hha-concept-2"],
    hhaSeries: (dataSchemaobj) => dataSchemaobj["hha-series"],
    hhaSet: (dataSchemaobj) => dataSchemaobj["hha-set"],
    speakerType: (dataSchemaobj) => dataSchemaobj["speaker-type"],
    lightingType: (dataSchemaobj) => dataSchemaobj["lighting-type"],
    fileName: (dataSchemaobj) => dataSchemaobj["file-name"],
    variantId: (dataSchemaobj) => dataSchemaobj["variant-id"],
    internalId: (dataSchemaobj) => dataSchemaobj["internal-id"],
    buyPrice: (dataSchemaobj) => dataSchemaobj["buy-price"],
    sellPrice: (dataSchemaobj) => dataSchemaobj["sell-price"],
    imageUri: (dataSchemaobj) => dataSchemaobj["image_uri"]
  },
  Name: {
    nameUSen: (nameObj) => nameObj["name-USen"],
    nameEUen: (nameObj) => nameObj["name-EUen"],
    nameEUde: (nameObj) => nameObj["name-EUde"],
    nameEUes: (nameObj) => nameObj["name-EUes"],
    nameUSes: (nameObj) => nameObj["name-USes"],
    nameEUfr: (nameObj) => nameObj["name-EUfr"],
    nameUSfr: (nameObj) => nameObj["name-USfr"],
    nameEUit: (nameObj) => nameObj["name-EUit"],
    nameEUnl: (nameObj) => nameObj["name-EUnl"],
    nameCNzh: (nameObj) => nameObj["name-CNzh"],
    nameTWzh: (nameObj) => nameObj["name-TWzh"],
    nameJPja: (nameObj) => nameObj["name-JPja"],
    nameKRko: (nameObj) => nameObj["name-KRko"],
    nameEUru: (nameObj) => nameObj["name-EUru"]
  }
};

export default resolvers;
