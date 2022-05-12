const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
import { REAL_CHEEBLIST } from "../../utils/allowlist";

const cheebieNodes = REAL_CHEEBLIST.map((addr) => keccak256(addr));
const tree = new MerkleTree(cheebieNodes, keccak256, {
  sortPairs: true,
});

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const addressToCheck = body.address;
  try {
    let leaf = keccak256(addressToCheck);
    let root = tree.getRoot().toString("hex");
    let proof = tree.getProof(leaf);
    let hexProof = tree.getHexProof(leaf);
    let isCheeblist = tree.verify(proof, leaf, root);
    res
      .status(200)
      .json({
        cheeblist: { proof, isCheeblist, hexProof },
        isCheeblist,
      });
  } catch (error) {
    res.status(500).json({ error });
  }
}
