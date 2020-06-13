import { gql } from "apollo-server";
const {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  mergeSchemas
} = require("graphql-tools");

const typeDefs = gql`
  type Houseware {
    id: ID!
    name: String!
    data: [HousewareData!]!
  }

  type Query {
    houseware(name: String!): Houseware!
    housewares: [Houseware!]!
  }

  type HousewareData {
    variant: String
    bodyTitle: String
    pattern: String
    patternTitle: String
    isDIY: Boolean
    canCustomizeBody: Boolean
    canCustomizePattern: Boolean
    kitCost: Int
    color1: String
    color2: String
    size: String
    milesPrice: Int
    source: String
    sourceDetail: String
    version: String
    hhaConcept1: String
    hhaConcept2: String
    hhaSeries: String
    hhaSet: String
    isInteractive: String
    tag: String
    isOutdoor: Boolean
    speakerType: String
    lightingType: String
    isCatalog: String
    fileName: String
    variantId: String
    internalId: Int
    name: Name
    buyPrice: Int
    sellPrice: Int
    imageUri: String
  }

  type Name {
    nameUSen: String
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
