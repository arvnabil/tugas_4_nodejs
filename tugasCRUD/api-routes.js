// initialize zxpress routes
let router = require('express').Router();

// set defaut API response
router.get('/', function(req, res) {
	res.json({
		status: 'API its Working',
		message:'Welcome to tugasCRUD crafted!'
	});
});

// import contactController
var siswaController = require('./siswaController');

// siswa apiRoutes
router.route('/siswa')
  .get(siswaController.index)
  .post(siswaController.new);
router.route('/siswa/:siswa_id')
  .get(siswaController.view)
  .patch(siswaController.update)
  .put(siswaController.update)
  .delete(siswaController.delete);
// Export API routes
module.exports = router;


