import { ComposedChart, PieChart, Pie, Cell, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  {
    name: "Sun",
    temperature: 26,
    humidity: 75,
    rainmeter: 2000
  },
  {
    name: "Mon",
    temperature: 2,
    humidity: 80,
    rainmeter: 2100
  },
  {
    name: "Tue",
    temperature: 35,
    humidity: 95,
    rainmeter: 2000
  },
  {
    name: "Wed",
    temperature: 30,
    humidity: 90,
    rainmeter: 2200
  },
  {
    name: "Thu",
    temperature: 32,
    humidity: 75,
    rainmeter: 1800
  },
  {
    name: "Fri",
    temperature: 5,
    humidity: 80,
    rainmeter: 2200
  },
  {
    name: "Sat",
    temperature: 7,
    humidity: 90,
    rainmeter: 2100
  }
];

const CustomizedTemperatureDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (value > 30) {
    return (
      <svg x={cx - 8} y={cy - 8} width={16} height={16} viewBox="0 0 384 511.4">
        <defs>
          <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="163.52" y1="286.47" x2="163.52" y2="500.71">
            <stop offset="0" stop-color="#FB6404"/><stop offset="1" stop-color="#F2BE10"/>
          </linearGradient>
        </defs>
        <path fill="#E20919" d="M77.46 228.43C65.33 119.85 128.78 43.48 247.72 0c-72.85 94.5 62.09 196.88 69.53 295.03 17.44-29.75 27.34-69.48 29.3-122.55 89.18 139.92 15.25 368.59-181.02 335.73-18.02-3.01-35.38-8.7-51.21-17.17C42.76 452.8 0 369.53 0 290c0-50.69 21.68-95.95 49.74-131.91 3.75 35.23 11.73 61.51 27.72 70.34z"/><path fill="url(#a)" d="M139.16 372.49c-21.83-57.66-18.81-150.75 42.33-183.41.43 107.03 103.57 120.64 84.44 234.9 17.64-20.39 26.51-53.02 28.1-78.75 27.96 65.38 6.04 117.72-33.81 144.37-121.15 81-225.48-83.23-156.11-173.26 2.08 20.07 26.14 51.12 35.05 56.15z"/>
      </svg>
    );
  }

  if (value < 20) {
    return (
      <svg x={cx - 8} y={cy - 8} width={16} height={16} viewBox="0 0 219.781 219.781" >
        <path d="M202.314,154.591l-22.322-12.888l19.345-11.407c3.568-2.104,4.755-6.702,2.651-10.27c-2.105-3.568-6.701-4.753-10.271-2.651
          l-26.646,15.713l-15.683-9.054V95.747l15.674-9.05l26.656,15.712c1.196,0.705,2.507,1.039,3.802,1.039
          c2.568,0,5.069-1.32,6.468-3.693c2.104-3.568,0.916-8.166-2.652-10.27l-19.349-11.405l22.327-12.891
          c3.587-2.071,4.816-6.658,2.745-10.245c-2.07-3.587-6.659-4.816-10.245-2.745L172.49,65.088l-0.202-22.461
          c-0.037-4.142-3.432-7.495-7.567-7.432c-4.143,0.037-7.47,3.425-7.433,7.567l0.278,30.941l-15.68,9.053L117.39,68.612V50.511
          l26.936-15.224c3.605-2.038,4.877-6.613,2.839-10.22c-2.038-3.606-6.615-4.878-10.22-2.839L117.39,33.281V7.5
          c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v25.781L82.834,22.229c-3.607-2.04-8.183-0.767-10.22,2.839
          c-2.038,3.606-0.767,8.182,2.839,10.22l26.937,15.224v18.103L77.895,82.757l-15.682-9.054l0.278-30.94
          c0.037-4.142-3.29-7.53-7.433-7.567c-0.024,0-0.046,0-0.068,0c-4.11,0-7.462,3.313-7.499,7.433l-0.202,22.459L24.968,52.2
          c-3.59-2.072-8.176-0.842-10.245,2.745c-2.071,3.587-0.842,8.174,2.745,10.245l22.327,12.891L20.443,89.486
          c-3.569,2.103-4.757,6.701-2.653,10.27c1.398,2.373,3.899,3.693,6.468,3.693c1.294,0,2.606-0.335,3.801-1.039l26.659-15.712
          l15.676,9.051v28.286l-15.684,9.056L28.06,117.376c-3.567-2.104-8.164-0.917-10.27,2.651c-2.104,3.568-0.916,8.166,2.651,10.27
          l19.347,11.407l-22.32,12.887c-3.587,2.071-4.816,6.658-2.745,10.245c1.39,2.406,3.91,3.751,6.502,3.751
          c1.272,0,2.563-0.325,3.743-1.006l22.321-12.887l0.202,22.461c0.037,4.119,3.388,7.433,7.499,7.433c0.022,0,0.046,0,0.068-0.001
          c4.142-0.037,7.47-3.425,7.433-7.567l-0.279-30.943l15.682-9.054l24.496,14.144v18.105l-26.937,15.224
          c-3.605,2.038-4.877,6.613-2.839,10.22c1.379,2.44,3.92,3.811,6.536,3.811c1.25,0,2.518-0.313,3.684-0.972l19.556-11.052v25.779
          c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-25.779l19.556,11.052c1.166,0.659,2.434,0.972,3.684,0.972
          c2.616,0,5.157-1.371,6.536-3.811c2.038-3.607,0.767-8.182-2.839-10.22l-26.936-15.224v-18.104l24.497-14.145l15.68,9.052
          l-0.286,30.942c-0.038,4.142,3.289,7.531,7.431,7.569c0.023,0.001,0.047,0.001,0.07,0.001c4.11,0,7.461-3.313,7.499-7.431
          l0.208-22.466l22.325,12.89c1.182,0.682,2.471,1.006,3.743,1.006c2.592,0,5.113-1.346,6.502-3.751
          C207.13,161.249,205.9,156.662,202.314,154.591z M85.394,95.748l24.498-14.145l24.496,14.145v28.285l-24.496,14.145l-24.498-14.145
          V95.748z" fill="blue" />
      </svg>
    );
  }
};


const Recharts = () => {
  return (
    <div style={{display: "flex"}}>
      <ComposedChart
        width={400}
        height={300}
        data={data}
      >
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="red" />
            <stop offset="30%" stopColor="lightgreen" />
            <stop offset="70%" stopColor="lightgreen" />
            <stop offset="100%" stopColor="blue" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={["dataMin - 1","dataMax + 1"]} yAxisId="temp" />
        <YAxis domain={["dataMin - 500","dataMax + 500"]} yAxisId="rainmeter" orientation="right"/>
        <Tooltip />
        <Legend />
        <Bar yAxisId="temp" type="monotone" dataKey="humidity" fill="orange" />
        <Area yAxisId="rainmeter" type="monotone" dataKey="rainmeter" stroke="lightblue" fill="lightblue" />
        <Line yAxisId="temp" type="monotone" dataKey="temperature" dot={<CustomizedTemperatureDot />} stroke='url(#colorUv)' />
      </ComposedChart>
      <PieChart
        width={400}
        height={300}
      >
        <Pie data={data} dataKey="rainmeter" outerRadius={40} fill="lightblue" />
        <Pie data={data} dataKey="temperature" outerRadius={100} innerRadius={45} label>
          {data.map((entry, index) => (
            <Cell key={index} fill={`hsl(240,100%,${30 + index * 3}%)`} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <RadarChart
        width={400}
        height={300}
        cx="50%" cy="50%" outerRadius="80%" data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar name="Temperature" dataKey="temperature" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
    </div>
  );
}

export default Recharts
