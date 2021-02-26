const dnaDict = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

const pairElement = (str) => str.split("").map((c) => [c, dnaDict[c]]);

console.log(pairElement("GCG"));
