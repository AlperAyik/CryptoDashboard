// import Chart from 'chart.js/auto'
import trending from './components/trending.ts' // currently treding cyrpto coins

const trendingCoins = document.getElementById("trending_coins") as HTMLDivElement;
const trendingNft = document.getElementById("trending_nft") as HTMLDivElement;

async function trendingElements() {
    const getApi = await trending();
    const coins = getApi.coins.slice(0,3);
    const nfts = getApi.nfts.slice(0, 3)
    console.log(getApi);

    coins.forEach((coin = {}) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <h1>${coin.item.name}</h1>
        <img src="${coin.item.thumb}" alt="">
        `

        trendingCoins.appendChild(newDiv);
    })

    nfts.forEach((coin = {}) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <h1>${coin.name}</h1>
        <img src="${coin.thumb}" alt="">
        `

        trendingNft.appendChild(newDiv);
    })
}

trendingElements()
// (async function() {
//     const crypto = await getCoins();
//     // const sorted = crypto.sort((a = any, b = any) => a.current_price - b.current_price);
//     const data = crypto.coins;
//
//     new Chart(
//         document.getElementById('acquisitions') as HTMLCanvasElement,
//         {
//             type: 'line',
//             data: {
//                 labels: data.map((row = any) => row.item.name),
//                 datasets: [
//                     {
//                         label: 'Trending rank',
//                         data: data.map((row = any) => row.item.score),
//                     }
//                 ]
//             }
//         }
//     );
// })();