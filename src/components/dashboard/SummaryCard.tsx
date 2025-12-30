import type { SummaryCardData } from "../../types";

interface SummaryCardProps {
  data: SummaryCardData;
}

export function SummaryCard({ data }: SummaryCardProps) {
  return (
    <div className={`summary-card gradient-${data.gradient}`}>
      <div className="card-header">
        <h3 className="card-title">{data.title}</h3>
        {data.linkText && (
          <a href="#" className="card-link">
            {data.linkText}
          </a>
        )}
        {data.statusIcon && (
          <span className="card-status-icon">{data.statusIcon}</span>
        )}
      </div>

      {data.amount && (
        <div className="card-amount">
          <div className="amount-value">
            {data.amount}
            {data.currency && (
              <select className="currency-select">
                <option>{data.currency}</option>
              </select>
            )}
          </div>
        </div>
      )}

      {data.percentage && (
        <div className="card-percentage">
          <span className="percentage-value">{data.percentage}</span>
        </div>
      )}

      {data.status && (
        <div className="card-status">
          <span className="status-text">{data.status}</span>
          <span className="status-indicator">📦</span>
        </div>
      )}
    </div>
  );
}
