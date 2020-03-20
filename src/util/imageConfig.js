export const assignImages = (poster) => {
    // TMDB image creation
    // https://developers.themoviedb.org/3/getting-started/images
    // const base_url = obj.images.secure_base_url
    // const size = obj.images.poster_sizes[3] 

    const base_url = localStorage.url;
    const size = localStorage.poster;

    if(!base_url || !size) throw new Error('Something went wrong 💥');

    const imageUrl = `${base_url}${size}/${poster}`;

    return {imageUrl}
};