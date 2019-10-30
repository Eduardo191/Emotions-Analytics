import React from 'react';
import Chart from 'chart.js';

export default class AverageGraph extends React.Component{

    componentDidMount = async () => {

        const ctx: any = document.getElementsByClassName('average_graph');

        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Raiva', 'Desprezo', 'Nojo', 'Medo', 'Felicidade', 'Tristeza'],
                datasets: [{
                    label: 'Porcentagem (%)',
                    data: [10, 20, 60.6778686, 5, 95, 2],
                    backgroundColor: [
                        'red',
                        'gray',
                        'green',
                        'black',
                        'yellow',
                        'blue'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    fontSize: 20,
                    text: 'Incidência com precisão acima de 80%'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    render() {
        return (
            <canvas className="average_graph" />
        );
    }
};