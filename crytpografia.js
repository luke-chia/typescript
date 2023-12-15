import { createHash, randomBytes } from 'crypto';
// Funciones Hash
const hash = createHash('sha256');
hash.update('some data to hash');
console.log(hash.digest('hex'));
// Cifrado Simetrico
var key = randomBytes(32);
var nonce = randomBytes(8);
console.log(key.toString("hex"));
console.log(nonce.toString("hex"));
var numbhex = Number("0x" + key.toString("hex"));
console.log("En Bits: " + numbhex.toString(2));
