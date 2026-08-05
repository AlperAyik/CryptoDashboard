import {trending, global} from './trending.ts'

const notBarText = document.getElementById('notBarText') as HTMLDivElement;


async function fetch() {
    try {
        const response = await trending()

        return response
    } catch (e) {
        console.error(e)
    }
}


export default async function priceAlerts() {
    const data = await fetch();

    data.coins.forEach((coin = {}) => {
        if(coin.item.data.price > 1) {
            let newText = document.createElement("p")
            newText.textContent = `${coin.item.name} is now above $1`;
            newText.classList.add('pText');
            notBarText.appendChild(newText);
        }
    })
}
priceAlerts()