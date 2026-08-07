export async function trending() {
    const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
    );
    return await response.json();
}

export async function global() {
    const response = await fetch("https://api.coingecko.com/api/v3/global");
    // console.log(await response.json());
    return await response.json();
}
export default {trending, global};