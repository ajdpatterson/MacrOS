import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Title, Legend);


const MacroCharts = ({dayTotals}) => {

console.log(dayTotals)

const percentageCarbs = ((dayTotals.carbs*4)/dayTotals.calories)*100
const percentageProtein = ((dayTotals.protein*4)/dayTotals.calories)*100
const percentageFat = ((dayTotals.fat*9)/dayTotals.calories)*100



    const data = {
            labels: ['Carbohydrates (%)', 'Protein (%)', 'Fat (%)'],
            datasets: [
            {
            label: '%',
            data: [percentageCarbs.toFixed(0), percentageProtein.toFixed(0), percentageFat.toFixed(0)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                
            ]
            },
        ],
    };

    const options = {
        title: {
            display:true,
            text: `Today's macros`
        }
    }
    
    return (
        <>
        <Pie data={data} options={options}/>
        </>
    )
}
export default MacroCharts;