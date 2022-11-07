const path = require('path')
const multer = require('muter')


var storage = multer.diskStorage({
destination: function(req, file, callback) => {
callback(null, 'uploads/')----> Enter File location where we want to store the image.
},
filename: function(req, file, callback) => {
let ext = path.extname(file.orginalname)
callback(null, Date.now() + ext)
}
})

var upload = multer ({
storage: storage,
fileFilter: function(req, file, callback) {
if(
file.mimetype == "image/png" ||
 file.mimetype == "image/jpg" 
){
callback(null, true)
} else{
console.log('only jpg & png file supported!')
callback(null, false)
}
},
limits: {
fileSize: 1024 * 1024 * 2
}
})
module.exports = upload