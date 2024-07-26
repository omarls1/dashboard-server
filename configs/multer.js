import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}_${file.originalname.replace(/\s+/g, "-")}`;
    cb(null, filename);
  },
});

export const upload = multer({ storage }).single("receipt");
