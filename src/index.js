module.exports = function getZerosCount(number, base) {
  let count = number;
  let currentBase = base;
  
  for (let i = 2; i <= currentBase; i++) {

    if (currentBase % i === 0) {
      let p = 0;
      let c = 0;
      let k = number;

      while (currentBase % i === 0) {
        p++;
        currentBase /= i;
      }
      
      while (Math.floor(k / i > 0)) {
        c += Math.floor(k / i);
        k /= i;
      }

      count = Math.floor(Math.min(count, c / p));
    }
  }
  
  return count;
}