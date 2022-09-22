const { Router } = require('express');
const router = Router();
const { all, one } = require('../../controllers/apis/productAPI');

router.get('/', all);

router.get('/:id', one);

module.exports = router;
