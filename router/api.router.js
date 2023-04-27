const express = require("express");
const router = express.Router();
const apiCTL = require('../controller/api.controller.js');

router.get('/get',apiCTL.GET);
router.post('/post',apiCTL.POST);
router.delete('/delete/:id',apiCTL.DELETE);
router.patch('/patch/:id',apiCTL.PATCH);


module.exports = router;