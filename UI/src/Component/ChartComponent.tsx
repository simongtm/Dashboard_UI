import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { IOrderDetail } from "../Interfaces/IOrderDetail";

interface IProps {
  orderData: Array<IOrderDetail>;
  intl?: any;
}
const Chart: React.FC<IProps> = (props) => {
  const { orderData } = props;
  const options: Highcharts.Options = {
    title: {
      text: `Report`,
    },
    chart: { height: "250px" },
    xAxis: {
      categories: orderData.map((x) => x.Date),
    },
    series: [
      {
        type: "line",
        data: orderData.map((x) => x.Amount),
      },
    ],
  };
  return (
    <HighchartsReact highcharts={Highcharts} he options={options} {...props} />
  );
};
export default Chart;
