
const CLOUD_NAME = "djqx5qrb1";

const CLOUDINARY_BASE =
    `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export const cloudinaryImage = (imagePath) => {
    return `${CLOUDINARY_BASE}/${imagePath.replace(/^\/+/, "")}`;
};
