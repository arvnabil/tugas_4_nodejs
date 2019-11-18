// siswaModel.js

var mongoose = require('mongoose');

var siswaSchema = mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  tanggallahir: {
      type: String,
      required: true
  },
  jeniskelamin: String,
  hobi: String,
});


// export contact Model
var Siswa = module.exports = mongoose.model('siswa', siswaSchema);

module.exports.get = function (callback, limit) {
	Siswa.find(callback).limit(limit);
}