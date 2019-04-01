const express = require("express");
const route = express.Router();
const controller = require("./controller");
const multer = require("multer");
const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename(req, file, cb) {
        cb(null, `uniIcon-${Date.now()}.${MIME_TYPE_MAP[file.mimetype]}`);
    }
});
const upload = multer({storage});

route.get("/:id", controller.RetreiveUniController);
route.put("/:id", upload.single("icon"), controller.UpdateUnisController);
route.delete("/:id", controller.DeleteUnisController);
route.get("/", controller.ListUnisController);
route.post("/", upload.single("icon"), controller.CreateUnisController);

module.exports = route;