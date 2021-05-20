// convert fahrenheit to celsius
function convertFahrToCelsius(num) {
    if (Array.isArray(num))
      return `${JSON.stringify(num)} is not a valid number but a/an array.`;
    if (isNaN(parseInt(num)))
      return `${JSON.stringify(
        num
      )} is not a valid number but a/an ${typeof num}.`;
    let fahrToCelsius = ((Number(num) - 32) * 5) / 9;
    return fahrToCelsius.toFixed(4);
  }
  // tests
  console.log(convertFahrToCelsius(0));
  console.log(convertFahrToCelsius("0"));
  console.log(convertFahrToCelsius([1, 2, 3]));
  console.log(convertFahrToCelsius({ temp: 0 }));
  
  const checkYuGiOh = (n) => {
    let result = [];
    if (isNaN(parseInt(n))) {
      return `Invalid Parameter: ${JSON.stringify(n)}`;
    }
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        result.push("yu-gi-oh");
        continue;
      } else if (i % 2 === 0 && i % 3 === 0) {
        result.push("yu-gi");
        continue;
      } else if (i % 2 === 0 && i % 5 === 0) {
        result.push("yu-oh");
        continue;
      } else if (i % 3 === 0 && i % 5 === 0) {
        result.push("gi-oh");
        continue;
      } else if (i % 2 === 0) {
        result.push("yu");
        continue;
      } else if (i % 3 === 0) {
        result.push("gi");
        continue;
      } else if (i % 5 === 0) {
        result.push("oh");
        continue;
      } else {
        result.push(i);
      }
    }
    return result;
  };
  
  console.log(checkYuGiOh(10));
  console.log(checkYuGiOh("5"));
  console.log(checkYuGiOh("fizzbuzz is meh"));
  