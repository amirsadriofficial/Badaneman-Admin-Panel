import type { Transaction } from "../../types";
import { TransactionItem } from "./TransactionItem";

interface TransactionListProps {
  title: string;
  transactions: Transaction[];
  showViewAll?: boolean;
  showFilters?: boolean;
}

export function TransactionList({
  title,
  transactions,
  showViewAll = false,
  showFilters = false,
}: TransactionListProps) {
  const groupedTransactions = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.date]) {
      acc[transaction.date] = [];
    }
    acc[transaction.date].push(transaction);
    return acc;
  }, {} as Record<string, Transaction[]>);

  return (
    <div className="transaction-list">
      <div className="transaction-list-header">
        <h3 className="transaction-list-title">{title}</h3>
        <div className="transaction-list-actions">
          {showFilters && (
            <>
              <span className="action-icon">🔍</span>
              <span className="action-icon">⚙️</span>
            </>
          )}
          {showViewAll && (
            <a href="#" className="view-all-link">
              View All
            </a>
          )}
        </div>
      </div>

      <div className="transaction-list-content">
        {Object.entries(groupedTransactions).map(([date, items]) => (
          <div key={date} className="transaction-group">
            <div className="transaction-date">{date}</div>
            {items.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
