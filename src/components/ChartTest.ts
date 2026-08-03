import trending from './trending.ts' // currently treding cyrpto coins
import Chart from 'chart.js/auto'

let myChart: Chart | null = null;

export default async function temp(crypto: String) {
    const result = await trending()

    if (crypto === 'coins') {
        if (myChart) {
            myChart.destroy()
            myChart = null
        }

        myChart = new Chart(
            document.getElementById('acquisitions') as HTMLCanvasElement,
            {
                type: 'line',
                data: {
                    labels: result.coins.map((row: any) => row.item.name),
                    datasets: [{
                        label: 'current % in 24h Coins',
                        data: result.coins.map((row: any) => row.item.data.price_change_percentage_24h.usd),
                        borderColor: '#52307c',
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            grid: {
                                color: ''
                            },
                        },
                        y: {
                            grid: {
                                color: ''
                            }
                        }
                    }

                }
            }
        )
    } else if (crypto === 'nfts') {
        if (myChart) {
            myChart.destroy()
            myChart = null
        }

        myChart = new Chart(
            document.getElementById('acquisitions') as HTMLCanvasElement,
            {
                type: 'line',
                data: {
                    labels: result.nfts.map((row: any) => row.name),
                    datasets: [{
                        label: 'current % in 24h Nfts',
                        data: result.nfts.map((row: any) => row.floor_price_24h_percentage_change),
                        borderColor: '#52307c',
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            grid: {
                                color: ''
                            },
                        },
                        y: {
                            grid: {
                                color: ''
                            }
                        }
                    }

                }
            }
        )
    } else {
        myChart = new Chart(
            document.getElementById('acquisitions') as HTMLCanvasElement,
            {
                type: 'line',
                data: {
                    labels: result.coins.map((row: any) => row.item.name),
                    datasets: [{
                        label: 'current % in 24h Coins',
                        data: result.coins.map((row: any) => row.item.data.price_change_percentage_24h.usd),
                        borderColor: '#52307c',
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            grid: {
                                color: ''
                            },
                        },
                        y: {
                            grid: {
                                color: ''
                            }
                        }
                    }

                }
            }
        )
    }

}

const coinsBtn = document.getElementById('coinsBtn') as HTMLButtonElement;
const nftsBtn = document.getElementById('nftsBtn') as HTMLButtonElement;

coinsBtn.addEventListener('click', () => {
    temp('coins')
})

nftsBtn.addEventListener('click', () => {
    temp('nfts')
})

temp('');