import trending from './components/trending.ts' // currently treding cyrpto coins
import Chart from 'chart.js/auto'

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
            <!-- fix align issue-->
           <div class="flex">
            <div class="grid grid-cols-1 p-2">
                <h1 class="text-white">${coin.item.name}</h1>
                <img src="${coin.item.small}" alt="">
            </div>
            <div class="flex justify-center items-center p-10 gap-2">
                <h2 class="text-white">$${coin.item.data.price}</h2>
                <h2 class="${coin.item.data.price_change_percentage_24h.usd > 1 ? "text-green-400" : "text-red-400"}">${Math.floor(100 * coin.item.data.price_change_percentage_24h.usd) / 100}%</h2>
            </div>
           </div>
      `
        trendingCoins.appendChild(newDiv);
    })

    nfts.forEach((nft = {}) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <h1 class="text-white">${nft.name}</h1>
        <img src="${nft.thumb}" alt="">
        <h2 class="${nft.floor_price_24h_percentage_change > 1 ? "text-green-400" : "text-red-400"}">${Math.floor(100 * nft.floor_price_24h_percentage_change) / 100}%</h2>
        `

        trendingNft.appendChild(newDiv);
    })
}

trendingElements()

//test
let myChart: Chart | null = null;
const coinsBtn = document.getElementById('coinsBtn') as HTMLButtonElement;
const nftsBtn = document.getElementById('nftsBtn') as HTMLButtonElement;
coinsBtn.addEventListener('click', async() => {
    if (myChart) {
        myChart.destroy()
        myChart = null
    }

   const result = await trending()

    myChart =new Chart(
        document.getElementById('acquisitions') as HTMLCanvasElement,
        {
            type: 'bar',
            data: {
                labels: result.coins.map((row: any) => row.item.name),
                datasets: [{
                    label: 'current % in 24h Coins',
                    data: result.coins.map((row: any) => row.item.data.price_change_percentage_24h.usd),
                }]
            }
        }
    )
})

nftsBtn.addEventListener('click', async() => {
    if (myChart) {
        myChart.destroy()
        myChart = null
    }

    const result = await trending()


    myChart = new Chart(
        document.getElementById('acquisitions') as HTMLCanvasElement,
        {
            type: 'bar',
            data: {
                labels: result.nfts.map((row: any) => row.name),
                datasets: [{
                    label: 'current % in 24h Nfts',
                    data: result.nfts.map((row: any) => row.floor_price_24h_percentage_change),
                }]
            }
        }
    )
})


async function temp() {
    const result = await trending()

    myChart =new Chart(
        document.getElementById('acquisitions') as HTMLCanvasElement,
        {
            type: 'bar',
            data: {
                labels: result.coins.map((row: any) => row.item.name),
                datasets: [{
                    label: 'current % in 24h Coins',
                    data: result.coins.map((row: any) => row.item.data.price_change_percentage_24h.usd),
                }]
            }
        }
    )
}

temp();