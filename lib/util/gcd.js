/**
 * Calculates greatest common divider (GCD)
 *
 * @param {number} a
 * @param {number} b
 *
 * @return {number}
 */
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

module.exports = gcd
