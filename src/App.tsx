import "./App.css";
import { CreditCard } from "./components/dashboard/CreditCard";
import { SummaryCard } from "./components/dashboard/SummaryCard";
import { TaskChart } from "./components/dashboard/TaskChart";
import { Sidebar } from "./components/layout/Sidebar";
import { TopBar } from "./components/layout/TopBar";
import { TransactionList } from "./components/transactions/TransactionList";
import {
  creditCardData,
  latestTransactions,
  summaryCards,
  taskCharts,
  upcomingTransactions,
} from "./data/mockData";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <div className="dashboard">
          <div className="dashboard-row">
            {summaryCards.map((card, index) => (
              <SummaryCard key={index} data={card} />
            ))}
            <CreditCard
              cardNumber={creditCardData.cardNumber}
              cardHolder={creditCardData.cardHolder}
              validThru={creditCardData.validThru}
            />
          </div>

          <div className="dashboard-row">
            {taskCharts.map((chart, index) => (
              <TaskChart key={index} data={chart} />
            ))}
          </div>

          <div className="dashboard-row">
            <TransactionList
              title="Latest Transactions"
              transactions={latestTransactions}
              showFilters={true}
            />
            <TransactionList
              title="Upcoming Transactions"
              transactions={upcomingTransactions}
              showViewAll={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
