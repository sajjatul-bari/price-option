import { LineChart as LChat, Line, XAxis, YAxis } from "recharts";
import { InfinitySpin } from "react-loader-spinner";
const LineChart = () => {
  const chart = [
    { name: "Alice", Math: 85, English: 78, Science: 92 },
    { name: "Bob", Math: 88, English: 80, Science: 95 },
    { name: "Charlie", Math: 90, English: 82, Science: 88 },
    { name: "David", Math: 85, English: 79, Science: 91 },
    { name: "Eva", Math: 89, English: 81, Science: 94 },
    { name: "Frank", Math: 92, English: 83, Science: 89 },
    { name: "Grace", Math: 87, English: 77, Science: 90 },
  ];

  return (
    <div>
      <div>
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      </div>

      <LChat height={500} width={1000} data={chart}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line type="monotone" dataKey="Math" stroke="white"></Line>
        <Line type="monotone" dataKey="English" stroke="green"></Line>
        <Line type="monotone" dataKey="Science" stroke="red"></Line>
      </LChat>
    </div>
  );
};

export default LineChart;
