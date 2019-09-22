const { StringMatchingModel } = require('../models/stringMatch');

function strmatch(strA, strB) {
  const isExist = [];

  if (strB.length === 0) {
    return true;
  }

  if (strA.length >= strB.length) {
    let pos = -1;
    for (let i = 0; i < strB.length; i++) {
      for (let j = pos >= 0 ? pos : 0; j < strA.length; j++) {
        if (strB[i] === strA[j]) {
          pos = j;
          isExist[i] = true;
          break;
        }
      }
    }
  } else {
    return false;
  }

  if (isExist.length === strB.length && isExist.every(i => i === true)) {
    return true;
  }
  return false;
}

module.exports = {
  add: async (req, res) => {
    try {
      const { strA, strB } = req.body;
      const isMacth = strmatch(strA, strB);
      if (isMacth) {
        const dbResponse = await StringMatchingModel.create({ strA, strB });
        return res.status(200)
          .json({
            result: true,
            message: 'Data successffully saved to database',
            data: dbResponse,
          });
      }
      return res.status(200)
        .json({
          result: false,
          message: 'strB does not contain in strA',
        });
    } catch (e) {
      return res.status(500)
        .json({
          message: 'An error occur',
          error: e,
        });
    }
  },

  list: async (req, res) => {
    try {
      const dataList = await StringMatchingModel.find();
      return res.status(200)
        .json({
          result: true,
          message: 'Data list',
          list: dataList,
        });
    } catch (e) {
      return res.status(500)
        .json({
          message: 'An error occur',
          error: e,
        });
    }
  },
};
