import "dotenv/config";
import "./db/connection";
import "./server";

import Houseware from "#root/db/models/Houseware";

const housewareItem = new Houseware({
  name: "air_circulator",
  data: [
    {
      variant: "White",
      "body-title": null,
      pattern: null,
      "pattern-title": null,
      isDIY: false,
      canCustomizeBody: false,
      canCustomizePattern: false,
      "kit-cost": null,
      "color-1": "White",
      "color-2": "White",
      size: "1x1",
      "miles-price": null,
      source: "Nook's Cranny",
      "source-detail":
        "Available in Nook's Cranny (either upgrade tier) in the unique furniture slot",
      version: "1.0.0",
      "hha-concept-1": "living room",
      "hha-concept-2": "office",
      "hha-series": null,
      "hha-set": null,
      isInteractive: true,
      tag: "Fan",
      isOutdoor: true,
      "speaker-type": null,
      "lighting-type": null,
      isCatalog: true,
      "file-name": "FtrCirculator_Remake_0_0",
      "variant-id": "0_0",
      "internal-id": 3821,
      name: {
        "name-USen": "air circulator",
        "name-EUen": "air circulator",
        "name-EUde": "Luftzirkulator",
        "name-EUes": "termoventilador",
        "name-USes": "termoventilador",
        "name-EUfr": "circulateur d'air",
        "name-USfr": "circulateur d'air",
        "name-EUit": "circolatore d'aria",
        "name-EUnl": "vloerventilator",
        "name-CNzh": "空气循环扇",
        "name-TWzh": "空氣循環扇",
        "name-JPja": "サーキュレーター",
        "name-KRko": "서큘레이터",
        "name-EUru": "напольный вентилятор"
      },
      "buy-price": 1100,
      "sell-price": 275,
      image_uri:
        "https://acnhapi.com/v1/images/furniture/FtrCirculator_Remake_0_0"
    },
    {
      variant: "Black",
      "body-title": null,
      pattern: null,
      "pattern-title": null,
      isDIY: false,
      canCustomizeBody: false,
      canCustomizePattern: false,
      "kit-cost": null,
      "color-1": "Black",
      "color-2": "Gray",
      size: "1x1",
      "miles-price": null,
      source: "Nook's Cranny",
      "source-detail":
        "Available in Nook's Cranny (either upgrade tier) in the unique furniture slot",
      version: "1.0.0",
      "hha-concept-1": "living room",
      "hha-concept-2": "office",
      "hha-series": null,
      "hha-set": null,
      isInteractive: true,
      tag: "Fan",
      isOutdoor: true,
      "speaker-type": null,
      "lighting-type": null,
      isCatalog: true,
      "file-name": "FtrCirculator_Remake_1_0",
      "variant-id": "1_0",
      "internal-id": 3821,
      name: {
        "name-USen": "air circulator",
        "name-EUen": "air circulator",
        "name-EUde": "Luftzirkulator",
        "name-EUes": "termoventilador",
        "name-USes": "termoventilador",
        "name-EUfr": "circulateur d'air",
        "name-USfr": "circulateur d'air",
        "name-EUit": "circolatore d'aria",
        "name-EUnl": "vloerventilator",
        "name-CNzh": "空气循环扇",
        "name-TWzh": "空氣循環扇",
        "name-JPja": "サーキュレーター",
        "name-KRko": "서큘레이터",
        "name-EUru": "напольный вентилятор"
      },
      "buy-price": 1100,
      "sell-price": 275,
      image_uri:
        "https://acnhapi.com/v1/images/furniture/FtrCirculator_Remake_1_0"
    },
    {
      variant: "Pink",
      "body-title": null,
      pattern: null,
      "pattern-title": null,
      isDIY: false,
      canCustomizeBody: false,
      canCustomizePattern: false,
      "kit-cost": null,
      "color-1": "Pink",
      "color-2": "Pink",
      size: "1x1",
      "miles-price": null,
      source: "Nook's Cranny",
      "source-detail":
        "Available in Nook's Cranny (either upgrade tier) in the unique furniture slot",
      version: "1.0.0",
      "hha-concept-1": "living room",
      "hha-concept-2": "office",
      "hha-series": null,
      "hha-set": null,
      isInteractive: true,
      tag: "Fan",
      isOutdoor: true,
      "speaker-type": null,
      "lighting-type": null,
      isCatalog: true,
      "file-name": "FtrCirculator_Remake_2_0",
      "variant-id": "2_0",
      "internal-id": 3821,
      name: {
        "name-USen": "air circulator",
        "name-EUen": "air circulator",
        "name-EUde": "Luftzirkulator",
        "name-EUes": "termoventilador",
        "name-USes": "termoventilador",
        "name-EUfr": "circulateur d'air",
        "name-USfr": "circulateur d'air",
        "name-EUit": "circolatore d'aria",
        "name-EUnl": "vloerventilator",
        "name-CNzh": "空气循环扇",
        "name-TWzh": "空氣循環扇",
        "name-JPja": "サーキュレーター",
        "name-KRko": "서큘레이터",
        "name-EUru": "напольный вентилятор"
      },
      "buy-price": 1100,
      "sell-price": 275,
      image_uri:
        "https://acnhapi.com/v1/images/furniture/FtrCirculator_Remake_2_0"
    },
    {
      variant: "Green",
      "body-title": null,
      pattern: null,
      "pattern-title": null,
      isDIY: false,
      canCustomizeBody: false,
      canCustomizePattern: false,
      "kit-cost": null,
      "color-1": "Green",
      "color-2": "Gray",
      size: "1x1",
      "miles-price": null,
      source: "Nook's Cranny",
      "source-detail":
        "Available in Nook's Cranny (either upgrade tier) in the unique furniture slot",
      version: "1.0.0",
      "hha-concept-1": "living room",
      "hha-concept-2": "office",
      "hha-series": null,
      "hha-set": null,
      isInteractive: true,
      tag: "Fan",
      isOutdoor: true,
      "speaker-type": null,
      "lighting-type": null,
      isCatalog: true,
      "file-name": "FtrCirculator_Remake_3_0",
      "variant-id": "3_0",
      "internal-id": 3821,
      name: {
        "name-USen": "air circulator",
        "name-EUen": "air circulator",
        "name-EUde": "Luftzirkulator",
        "name-EUes": "termoventilador",
        "name-USes": "termoventilador",
        "name-EUfr": "circulateur d'air",
        "name-USfr": "circulateur d'air",
        "name-EUit": "circolatore d'aria",
        "name-EUnl": "vloerventilator",
        "name-CNzh": "空气循环扇",
        "name-TWzh": "空氣循環扇",
        "name-JPja": "サーキュレーター",
        "name-KRko": "서큘레이터",
        "name-EUru": "напольный вентилятор"
      },
      "buy-price": 1100,
      "sell-price": 275,
      image_uri:
        "https://acnhapi.com/v1/images/furniture/FtrCirculator_Remake_3_0"
    },
    {
      variant: "Yellow",
      "body-title": null,
      pattern: null,
      "pattern-title": null,
      isDIY: false,
      canCustomizeBody: false,
      canCustomizePattern: false,
      "kit-cost": null,
      "color-1": "Yellow",
      "color-2": "Gray",
      size: "1x1",
      "miles-price": null,
      source: "Nook's Cranny",
      "source-detail":
        "Available in Nook's Cranny (either upgrade tier) in the unique furniture slot",
      version: "1.0.0",
      "hha-concept-1": "living room",
      "hha-concept-2": "office",
      "hha-series": null,
      "hha-set": null,
      isInteractive: true,
      tag: "Fan",
      isOutdoor: true,
      "speaker-type": null,
      "lighting-type": null,
      isCatalog: true,
      "file-name": "FtrCirculator_Remake_4_0",
      "variant-id": "4_0",
      "internal-id": 3821,
      name: {
        "name-USen": "air circulator",
        "name-EUen": "air circulator",
        "name-EUde": "Luftzirkulator",
        "name-EUes": "termoventilador",
        "name-USes": "termoventilador",
        "name-EUfr": "circulateur d'air",
        "name-USfr": "circulateur d'air",
        "name-EUit": "circolatore d'aria",
        "name-EUnl": "vloerventilator",
        "name-CNzh": "空气循环扇",
        "name-TWzh": "空氣循環扇",
        "name-JPja": "サーキュレーター",
        "name-KRko": "서큘레이터",
        "name-EUru": "напольный вентилятор"
      },
      "buy-price": 1100,
      "sell-price": 275,
      image_uri:
        "https://acnhapi.com/v1/images/furniture/FtrCirculator_Remake_4_0"
    }
  ]
});

housewareItem.save(function (err, housewareItem) {
  if (err) return console.error(err);
  console.log(`${housewareItem.name} saved`);
});
