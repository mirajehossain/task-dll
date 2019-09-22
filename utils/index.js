module.exports = {
  add: (req, res) => {
    const { strA, strB } = req.body;
    strmatch(strA, strB);
  },
};

function strmatch(strA, strB) {
  const isExist = [];

  if (strB.length === 0) {
    return true;
  }
  for (let i = 0; i < strB.length; i++) {
    for (let j = 0; j < strA.length; j++) {
      if (strB[i] === strA[j]) {
        isExist[i] = true;
        break;
      }
    }
  }
  console.log(isExist);
  if (isExist.length === strB.length && isExist.every(i => i === true)) {
    return true;
  }
  return false;
}
