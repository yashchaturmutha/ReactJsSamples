import {useState,useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function LineChart({location}) {

  let [data, setData]= useState({
    labels:[],
    datasets:[
      {
        label:"User Count",
        data:[10, 20, 30, 22, 11, 2, 21, 49, 61, 3, 11, 18],
        // backgroundColor:'yellow',
        // borderColor:'green',
        tension:0.4,
        // fill:true,
        pointStyle:'rect',
        pointBorderColor:'blue',
        // pointBackgroundColor:'#fff',
        showLine:true
      }
    ]
  });

  // data = useMemo(() => 
  // { 
  //   if(! data.labels.includes(location.today))
  //   {
  //   setData(prevData=>({...prevData,labels:[...prevData.labels,location.today]}))
  //   }
  //   console.log(location.today);
    
  //   return data;
  // }, [btnclick]);

  useEffect(() => {

    // if(! data.labels.includes(location.today))
    // {
    setData(prevData=>({...prevData,labels:[...prevData.labels,location.today]}));
    setData(prevData=>({...prevData,labels:[...new Set(prevData.labels)].sort()}));
    // }
  console.log(location.today);
  }, []);
  

  return (
    <>
    {console.log(data.labels)}
    <div className="lineChart" >
      <Line data={data}>Hello</Line>
    </div>
    </>
  );
}

export default LineChart;