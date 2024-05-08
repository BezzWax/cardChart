import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const xLabels = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const PriceChart = ({ onUpdatePrice }) => {
	const [randomNumbers, setRandomNumbers] = useState([]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			generateRandomNumber(onUpdatePrice, setRandomNumbers);
		}, 5000); // set interval of updating chart data

		return () => clearInterval(intervalId);
	}, [onUpdatePrice]); // dependency onUpdatePrice

	return (
		<BarChart
			width={500}
			height={300}
			series={[
				{
					data: randomNumbers,
					label: 'Price chart',
				},
			]}
			xAxis={[
				{
					data: xLabels,
					scaleType: 'band',
				},
			]}
			yAxis={[{ max: 10000 }]}
		/>
	);
};

// random chart + price 
const generateRandomNumber = (onUpdatePrice, setRandomNumbers) => {
	const randomNumber = Math.floor(Math.random() * 2000); // magic :]
	setRandomNumbers(prevRandomNumbers => [...prevRandomNumbers, randomNumber]); // adding new value
	onUpdatePrice(randomNumber);
};

export default PriceChart;
