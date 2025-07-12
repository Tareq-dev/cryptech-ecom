import multer from "multer";
import path from "path";

// Helper to make name slug-friendly
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // space -> -
    .replace(/[^\w\-]+/g, '')       // remove non-word
    .replace(/\-\-+/g, '-')         // multiple - to single -
    .replace(/^-+/, '')             // trim - from start
    .replace(/-+$/, '');            // trim - from end
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploadsProducts/");
  },
  filename: (req, file, cb) => {
    const productName = req.body.name || "product";  // fallback name
    const safeName = slugify(productName);
    const ext = path.extname(file.originalname);
    const index = req.fileIndex || 1;
    req.fileIndex = (req.fileIndex || 1) + 1;

    cb(null, `${safeName}-${index}${ext}`);
  }
});

export const uploadMultiple = multer({ storage }).array("photos", 5);
