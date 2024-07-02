export const getAssetURL = (img) => {
  return new URL(`../assets/uploads/${img}`, import.meta.url).href
}
