import Atmosphere from "./atmosphere/index.js";
import ChemicalsWasteAndSupplyChains from "./chemicalWasteAndSupplyChains/index.js";
import EnvironmentalPreservation from "./environmentalPreservation/index.js";

const EcologicalCeilings = {
  ...Atmosphere,
  ...ChemicalsWasteAndSupplyChains,
  ...EnvironmentalPreservation,
};
export default EcologicalCeilings;
