import Chart from 'chart.js/auto'

async function getCoins() {
    const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    );

    return await response.json();
}

(async function() {
    const crypto = await getCoins();
    const sorted = crypto.sort((a = any, b = any) => a.current_price - b.current_price);
    const data = sorted.slice(0, 20);

    new Chart(
        document.getElementById('acquisitions') as HTMLCanvasElement,
        {
            type: 'bar',
            data: {
                labels: data.map((row = any) => row.name),
                datasets: [
                    {
                        label: 'Current price USD',
                        data: data.map((row = any) => row.current_price),
                    }
                ]
            }
        }
    );
})();