// 素数判定
function isPrimeNumber(inputNumber) {
  const inputCondition = typeof inputNumber && Number.isInteger(inputNumber) && inputNumber > 0;
  if (!inputCondition) {
    throw Error("自然数を入力してください")
  };
  if (inputNumber == 1) {
    return false;
  };
  for (let number = 2; number < inputNumber; number++) {
    if (inputNumber % number == 0) {
      return false;
    };
  };
  return true;
}
// 素因数取得
function getPrimeFactor(number) {
  let Disors = []
  for (let i = 1; i <= number; i++) {
    if (isPrimeNumber(i)) {
      if (number % i == 0) {
        Disors.push(i);
      };
    };
  };
  return Disors
};

function hasCommonElement(array1, array2) {
  return array1.filter(value => array2.includes(value)).length > 0;
}

// 互いに素判定
function isComprime(number1, number2) {
  const number1PrimeFactor = getPrimeFactor(number1)
  const number2PrimeFactor = getPrimeFactor(number2)
  if (hasCommonElement(number1PrimeFactor, number2PrimeFactor)) {
    return true;
  };
  return false
};


// 約数取得
function getDivisors(number) {
  let divisors = []
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      divisors.push(i);
    }
  }
  return divisors
}

// 公約数取得
function getCommonDivisors(number1, number2) {
  const number1Divisors = getDivisors(number1);
  const number2Divisors = getDivisors(number2);
  return number1Divisors.filter(element => number2Divisors.includes(element));
};

// 最大公約数取得
function getGreatestCommonDivisor(number1, number2) {
  const commonDivisors = getCommonDivisors(number1, number2);
  return Math.max(...commonDivisors)
}