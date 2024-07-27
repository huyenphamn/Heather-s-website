
// Appending the path to url for dynamic image import
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};