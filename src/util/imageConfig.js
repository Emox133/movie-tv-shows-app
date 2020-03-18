export const assignImages = (obj, poster) => {
    // TMDB image creation
    // https://developers.themoviedb.org/3/getting-started/images

    const base_url = obj.images.secure_base_url
    const size = obj.images.poster_sizes[3] 
    const imageUrl = `${base_url}${size}/${poster}`;

    return {imageUrl}
};