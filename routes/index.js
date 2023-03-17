var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', { resulft: 0, a: 0, b: 0, operator: "operator" });
});

router.post('/', function (req, res, next) {
  
  const soA = Number(req.body.a);
  const soB = Number(req.body.b);
  const operator = req.body.operator;
  let resulft = 0
  switch (operator) {
    case "cong":
      resulft = soA + soB
      break;
    case "tru":
      resulft = soA - soB
      break;
    case "nhan":
      resulft = soA * soB
      break;
    case "chia":
      resulft = soA / soB
      break;
    default:
      resulft = 0
      break;
  }
  console.log(`a = ${soA} b = ${soB} toantu = ${operator} ketqua = ${resulft}`)
  res.render('index', { resulft: resulft, a: soA, b: soB, operator: operator });
});


module.exports = router;
