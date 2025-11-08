import ReactECharts from "echarts-for-react";
import { Clock } from "lucide-react";

const data1 = [40, 60, 45, 80, 65, 90, 75];
const data2 = [35, 55, 50, 70, 60, 85, 80];
const categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function ConversionHistory() {
  const option = {
    grid: {
      left: -40,
      right: -10,
      top: -20,
      bottom: -40,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: categories,
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        data: data1,
        type: "line",
        smooth: true,
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(59, 130, 246, 0.5)",
              },
              {
                offset: 1,
                color: "rgba(59, 130, 246, 0.1)",
              },
            ],
          },
        },
        lineStyle: {
          color: "rgba(59, 130, 246, 0.6)",
          width: 2,
        },
        symbol: "none",
        itemStyle: {
          color: "rgba(59, 130, 246, 0.6)",
        },
        emphasis: {
          disabled: true,
        },
      },
      {
        data: data2,
        type: "line",
        smooth: true,
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(107, 114, 128, 0.5)",
              },
              {
                offset: 1,
                color: "rgba(107, 114, 128, 0.1)",
              },
            ],
          },
        },
        lineStyle: {
          color: "rgba(107, 114, 128, 0.6)",
          width: 2,
        },
        symbol: "none",
        itemStyle: {
          color: "rgba(107, 114, 128, 0.6)",
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      borderColor: "transparent",
      textStyle: {
        color: "#fff",
      },
    },
  };

  return (
    <>
      <div className="px-6 pt-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">
              Conversion history
            </h3>
            <p className="text-gray-600 text-sm">Week to week performance</p>
          </div>
          <Clock className="size-5 text-gray-600" />
        </div>
      </div>

      <div className="px-6">
        <div className="h-48">
          <ReactECharts
            option={option}
            style={{ height: "100%", width: "100%" }}
            opts={{ renderer: "svg" }}
          />
        </div>
      </div>
    </>
  );
}
