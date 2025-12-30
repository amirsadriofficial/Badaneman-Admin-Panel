import type { TaskChartData } from "../../types";

interface TaskChartProps {
  data: TaskChartData;
}

export function TaskChart({ data }: TaskChartProps) {
  const maxBarHeight = Math.max(...data.bars);

  return (
    <div className="task-chart">
      <div className="chart-header">
        <div className="chart-title">{data.title}</div>
        <div className="chart-stats">
          <span className="chart-count">{data.count}</span>
          <span className={`chart-change ${data.changeColor}`}>
            {data.change}
          </span>
        </div>
        <div className="chart-period">{data.period}</div>
      </div>
      <div className="chart-bars">
        {data.bars.map((bar, index) => (
          <div
            key={index}
            className={`chart-bar ${
              index === data.activeBarIndex ? "active" : ""
            }`}
            style={{
              height: `${(bar / maxBarHeight) * 100}%`,
              backgroundColor:
                index === data.activeBarIndex ? data.activeBarColor : "#e0e0e0",
            }}
          />
        ))}
      </div>
    </div>
  );
}
