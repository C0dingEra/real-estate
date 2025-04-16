import cloudinary from '../utils/cloudinary.js';
import multer from 'multer';

const storage = multer.memoryStorage();
const uploadMiddleware = multer({ storage });

export const uploadProfileMiddleware = uploadMiddleware.single('image');

export const test = (req, res) => {
    res.json({ message: "Api route is working" });
};

export const upload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Convert buffer to base64 string for Cloudinary
        const base64 = req.file.buffer.toString('base64');
        const dataUri = `data:${req.file.mimetype};base64,${base64}`;

        const result = await cloudinary.uploader.upload(dataUri, {
            folder: 'profiles',
            transformation: [{ width: 500, height: 500, crop: 'fill', gravity: 'face' }],
        });

        res.json({ imageUrl: result.secure_url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Upload failed' });
    }
};
