const cloudinary = require('cloudinary').v2;

const uploadImage = async (buffer) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
            folder: "blog_images",
        }, 
        (error, result) => {
            if (error)
                reject(error);
            else
                resolve(result);
        })
    })
    .end(buffer);
}


module.exports = cloudinary;