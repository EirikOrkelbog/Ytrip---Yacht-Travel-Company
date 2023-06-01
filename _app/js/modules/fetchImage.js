import { sanity } from "../sanity.js";

// This function takes a GROQ query as a parameter and fetches the image asset from sanity api
export default async function fetchImage(imageAssetId) {
	const imageAssetQuery = `*[_id == "${imageAssetId}"]`;
	const imageAsset = await sanity.fetch(imageAssetQuery);
	const imageUrl = imageAsset[0].url;
	return imageUrl;
}