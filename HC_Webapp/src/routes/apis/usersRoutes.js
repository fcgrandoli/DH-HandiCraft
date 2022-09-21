const {Router} = require ("express");
const router = Router();
const {list, detail} = require('../../controllers/apis/userAPI');

router.get('/',list);

router.get('/:id', detail);


module.exports = router;