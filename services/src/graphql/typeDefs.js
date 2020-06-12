import { gql } from "apollo-server";
const typeDefs = gql`
  type Houseware {
    id: ID!
    name: String!
    data: [HousewareData!]!
  }

  type Query {
    housewares: [Houseware!]!
  }

  type HousewareData {
    variant: String
    bodyTitle: {
      type: GraphQLString,
      resolve: (bodytitledata) =>{
        const bodytitle = bodytitledata['body-title'];
        return bodytitle;
      }
    }
    pattern: String
    patternTitle: {
      type: GraphQLString,
      resolve: (patterntitledata) =>{
        const patterntitle = patterntitledata['pattern-title'];
        return patterntitle;
      }
    }
    isDIY: Boolean
    canCustomizeBody: Boolean
    canCustomizePattern: Boolean
    kitCost: {
      type: Int,
      resolve: (kitcostdata) =>{
        const kitcost = kitcostdata['kit-cost'];
        return kitcost;
      }
    }
    color1: {
      type: GraphQLString,
      resolve: (color1data) =>{
        const color = color1data['color-1'];
        return color;
      }
    }
    color2: {
      type: GraphQLString,
      resolve: (color2data) =>{
        const color = color2data['color-2'];
        return color;
      }
    size: String
    milesPrice: {
      type: Int,
      resolve: (milespricedata) =>{
        const milesprice = milespricedata['miles-price'];
        return milesprice;
      }
    source: String
    sourceDetail: {
      type: GraphQLString,
      resolve: (sourcedetaildata) =>{
        const sourcedetail = sourcedetaildata['source-detail'];
        return sourcedetail;
      }
    version: String
    hhaConcept1: {
      type: GraphQLString,
      resolve: (hhaconcept1data) =>{
        const hhaconcept = hhaconcept1data['hha-concept-1'];
        return hhaconcept;
      }
    hhaConcept2: {
      type: GraphQLString,
      resolve: (hhaconcept2data) =>{
        const hhaconcept = hhaconcept2data['hha-concept-2'];
        return hhaconcept;
      }
    hhaSeries: {
      type: GraphQLString,
      resolve: (hhaseriesdata) =>{
        const hhaseries = hhaseriesdata['hha-series'];
        return hhaseries;
      }
    "hha-set": String
    isInteractive: String
    tag: String
    isOutdoor: Boolean
    "speaker-type": String
    "lighting-type": String
    isCatalog: String
    "file-name": String
    "variant-id": String
    "internal-id": Number
    name: nameSchema
    "buy-price": Number
    "sell-price": Number
    image_uri: String
  }

  type Name {
    "name-USen": String
    nameEUen: String
    nameEUde: String
    nameEUes: String
    nameUSes: String
    nameEUfr: String
    nameUSfr: String
    nameEUit: String
    nameEUnl: String
    nameCNzh: String
    nameTWzh: String
    nameJPja: String
    nameKRko: String
    nameEUru: String
  }
`;
export default typeDefs;
