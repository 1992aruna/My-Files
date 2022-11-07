const express = require("express");
const router = express.Router();
const multer = require("muter");


const storage = multer.diskStorage({
destination: (req, file, callback) => {
callback(null, "./client/public/uploads/")----> Enter File location where we want to store the image.
},
filename: (req, file, callback) => {
callback(null, file.orginalname);
}
})

const upload = multer({storage: storage});