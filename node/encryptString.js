const crypto = require('crypto');
const assert = require('assert');

const algorithm = 'aes-256-cbc'; // modern AES algorithm
const password = 'password';
const text = 'I love kittens';

// Derive a 32-byte key from the password (for AES-256)
const key = crypto.createHash('sha256').update(password).digest();
const iv = crypto.randomBytes(16); // 16-byte IV

// Encrypt
const cipher = crypto.createCipheriv(algorithm, key, iv);
const encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');

// Decrypt
const decipher = crypto.createDecipheriv(algorithm, key, iv);
const decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');

console.log('Encrypted:', encrypted);
assert.equal(decrypted, text);


// const text = 'I love kittens';
const encoded = Buffer.from(text).toString('base64');
const decoded = Buffer.from(encoded, 'base64').toString('utf8');

console.log('Encoded:', encoded);
console.log('Decoded:', decoded);
