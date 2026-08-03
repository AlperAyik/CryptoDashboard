import trending from './components/trending.ts' // currently treding cyrpto coins
import temp from './components/ChartTest.ts'

const trendingCoins = document.getElementById("trending_coins") as HTMLDivElement;
const trendingNft = document.getElementById("trending_nft") as HTMLDivElement;

async function trendingElements() {
    const getApi = await trending();
    const coins = getApi.coins.slice(0, 3);
    const nfts = getApi.nfts.slice(0, 3)
    console.log(getApi);

    coins.forEach((coin = {}) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `
           <div class="grid grid-cols-[1fr_auto_auto] items-center gap-4 p-6 min-h-28">
                <div class="flex items-center gap-4 min-w-0">
                    <img src="${coin.item.small}" alt="" class="w-16 h-16">
            
                    <h1 class="text-white truncate" title="${coin.item.name}">
                        ${coin.item.name}
                    </h1>
                </div>
            
                <h2 class="text-white text-right whitespace-nowrap">
                    $${coin.item.data.price}
                </h2>
            
                <h2 class="text-right whitespace-nowrap ${
                        coin.item.data.price_change_percentage_24h.usd > 1
                            ? "text-green-400"
                            : "text-red-400"
                    }">
                    ${Math.floor(100 * coin.item.data.price_change_percentage_24h.usd) / 100}%
                </h2>
            </div>
      `
        trendingCoins.appendChild(newDiv);
    })

    nfts.forEach((nft = {}) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `
          <div class="grid grid-cols-[1fr_auto_auto] items-center gap-4 p-2 min-h-28">
            <div class="flex items-center gap-2">
                <img src="${nft.thumb}" alt="" title="${nft.name}" class="w-12 h-12">
                <h1 class="text-white">${nft.name}</h1>
            </div>
        
            <h2 class="text-white text-right">
                $${nft.floor_price_in_native_currency}
            </h2>
        
            <h2 class="text-right ${nft.floor_price_24h_percentage_change > 1 ? 'text-green-400' : 'text-red-400'}">
                ${Math.floor(100 * nft.floor_price_24h_percentage_change) / 100}%
            </h2>
        </div>
        `

        trendingNft.appendChild(newDiv);
    })
}

trendingElements()

//Test
const navbar = document.querySelector(".navbar") as HTMLDivElement;
const closeNav = document.getElementById("closeNav") as HTMLButtonElement;
const btnOpen = document.querySelector(".btnOpen") as HTMLButtonElement;

closeNav.addEventListener("click", () => {
    navbar.classList.add("close");
    btnOpen.classList.add("open");
})

btnOpen.addEventListener("click", () => {
    navbar.classList.remove("close");
    btnOpen.classList.remove("open");
})