import type { Transaction } from "../../types";

interface TransactionItemProps {
  transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const amountClass =
    transaction.type === "income" ? "amount-income" : "amount-expense";
  const statusClass = transaction.status ? `status-${transaction.status}` : "";

  return (
    <div className="transaction-item">
      <div className="transaction-icon">
        {transaction.icon || (transaction.type === "income" ? "💰" : "💸")}
      </div>
      <div className="transaction-details">
        <div className="transaction-description">{transaction.description}</div>
        {transaction.status && (
          <div className={`transaction-status ${statusClass}`}>
            {transaction.status === "success"
              ? "Successfully"
              : "Unsuccessfully"}
          </div>
        )}
      </div>
      <div className={`transaction-amount ${amountClass}`}>
        {transaction.type === "income" ? "+" : "-"} {transaction.amount}
      </div>
    </div>
  );
}
