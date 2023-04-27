const express = require("express");
const router = express.Router();
const homeCTL = require('../controller/home.controller.js');

router.get('/',homeCTL.Home);
router.post('/',homeCTL.Home);
router.post('/delete',homeCTL.Delete);
router.get('/edit',homeCTL.EditInfor);
router.post('/edit',homeCTL.Edit);
router.get('/search',homeCTL.Search);
module.exports = router;