export default async function trending() {
    const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
    );
    return await response.json();
}