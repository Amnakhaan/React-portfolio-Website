/* To Dynamically importing images */

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };