let {createData,readData,updateData,deleteData } = require('../controller/frontendDataController.js');
let express = require('express')

let router = express.Router();

router.get('/',readData);
router.post('/create',createData);
router.put("/update/:id",updateData)
router.delete("/delete/:id",deleteData)

module.exports = router;