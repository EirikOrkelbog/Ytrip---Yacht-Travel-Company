import { sanity } from "../sanity.js";

export default async function fetchImage(imageAssetId) {
	const imageAssetQuery = `*[_id == "${imageAssetId}"]`;
	const imageAsset = await sanity.fetch(imageAssetQuery);
	const imageUrl = imageAsset[0].url;
	return imageUrl;
}