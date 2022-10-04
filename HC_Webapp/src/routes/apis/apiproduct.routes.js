const { Router } = require('express');
const router = Router();
const { summary, all, one } = require('../../controllers/apis/productAPI');

router.get('/', all);

router.get('/summary', summary);

router.get('/:id', one);

module.exports = router;
