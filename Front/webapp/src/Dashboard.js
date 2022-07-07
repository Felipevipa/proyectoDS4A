import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import { Link } from 'react-router-dom'
import data from './data.json'
import EDA from './EDA'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Dashboard() {
    return (
        <div className='dashboard-wrapper'>
            <div className='dashboard'>
                <div className='primero graph-container'>
                    Texto
                </div>
                <div className='segundo graph-container'>
                    Texto
                </div>
                <div className='tercero graph-container'>
                    <Doughnut data={{
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [
                            {
                                label: '# of Votes',
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }} />
                </div>
                <div className='cuarto graph-container'>
                    <Doughnut data={{
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [
                            {
                                label: '# of Votes',
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }} />
                </div>
                <div className='quinto graph-container'>
                    <Bar options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Chart.js Bar Chart',
                            },
                        },
                    }} data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                                label: 'Dataset 1',
                                data: [0, 2, 6, 8, 11, 15, 18],
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            },
                            {
                                label: 'Dataset 2',
                                data: [11, 15, 18, 0, 2, 6, 8],
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            },
                        ],
                    }} />
                </div>
                <div className='sexto graph-container'>
                    <Bar options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Chart.js Bar Chart',
                            },
                        },
                    }} data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                                label: 'Dataset 1',
                                data: [0, 2, 6, 8, 11, 15, 18],
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            },
                            {
                                label: 'Dataset 2',
                                data: [0, 2, 6, 8, 11, 15, 18],
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            },
                        ],
                    }} />
                </div>
                <div className='septimo graph-container'>
                    Texto
                </div>
                <div className='octavo graph-container'>
                    Texto
                </div>
                <div className='noveno graph-container'>
                    <div className='d-flex'>
                        <select className='form-select'>
                            {data.localidades.map(localidad => {
                                return <option value={localidad.id}>{localidad.nombre}</option>
                            })}

                        </select>
                        <select className='form-select'>
                            {data.localidades.map(localidad => {
                                return <option value={localidad.id}>{localidad.nombre}</option>
                            })}

                        </select>
                    </div>
                    <Line options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'bottom',
                            },
                            title: {
                                display: true,
                                text: 'Chart.js Line Chart',
                            },
                        },
                    }} data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                                label: 'Dataset 1',
                                data: [0, 6, 8, 9, 10, 12, 3],
                                borderColor: 'rgb(255, 99, 132)',
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            },
                            {
                                label: 'Dataset 2',
                                data: [0, 6, 8, 9, 10, 12, 3],
                                borderColor: 'rgb(53, 162, 235)',
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            },
                        ],
                    }} />
                </div>
                <div className='decimo graph-container'>
                    <Bar options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Chart.js Bar Chart',
                            },
                        },
                    }} data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                                label: 'Dataset 1',
                                data: [0, 2, 6, 8, 11, 15, 18],
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            },
                            {
                                label: 'Dataset 2',
                                data: [0, 2, 6, 8, 11, 15, 18],
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            },
                        ],
                    }} />
                </div>
                <div className='onceavo graph-container'>
                    <Bar options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Chart.js Bar Chart',
                            },
                        },
                    }} data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                                label: 'Dataset 1',
                                data: [0, 2, 6, 8, 11, 15, 18],
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            },
                            {
                                label: 'Dataset 2',
                                data: [0, 2, 6, 8, 11, 15, 18],
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            },
                        ],
                    }} />
                </div>

            </div>
            <br />
            <br />
            <EDA />
        </div>
    )
}

export default Dashboard