let graph = document.querySelector('#graph_zone').getContext("2d");

let myChart = new Chart(graph, {
    type: 'line',
    options: {
        responsive: true,
        legend: {
            display: false
        },
    },
    data: {
        labels: ['5Nov', '6Nov', '7Nov', '8Nov', '9Nov', '10Nov', '11Nov', '12Nov', '13Oct', '14Nov', '15Nov'],

        datasets: [{
            label: 'BTC',

            data: [125, 590, 300, 225, 50, 310, 200, 300, 575, 125, 380],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgb(99,130,255)',
            ],
            borderWidth: 2
        },
        {
            label: 'ETH',
            data: [25, 490, 200, 325, 150, 10, 75, 400, 675, 325, 480],
            backgroundColor: [
                'rgb(58, 54, 54, 0.81)',
            ],
            borderColor: [
                'rgb(0,255,225)',
            ],
            borderWidth: 2
        }],

    }
});
function openNav() {
    document.querySelector("#mySidenav").classList.add("side-active");
}
function closeNav() {
    document.querySelector("#mySidenav").classList.remove("side-active");
    document.querySelector(".menu-overlay").classList.remove("menu-overlay-active");
}