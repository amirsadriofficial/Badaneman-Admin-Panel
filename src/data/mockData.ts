import type { SummaryCardData, TaskChartData, Transaction } from "../types";

export const summaryCards: SummaryCardData[] = [
  {
    title: "Your Working Balance",
    amount: "9,250,000",
    currency: "PKR",
    linkText: "Saving Account",
    gradient: "orange-purple",
  },
  {
    title: "Your Saving Status",
    percentage: "4.28%",
    status: "Your spending increased",
    statusIcon: "📦",
    gradient: "pink-orange",
  },
];

export const creditCardData = {
  cardNumber: "3829 4820 4629 5025",
  cardHolder: "Anita Rose",
  validThru: "09/17",
};

export const taskCharts: TaskChartData[] = [
  {
    title: "Tasks In Progress",
    count: "210",
    change: "23",
    changeColor: "green",
    period: "Current Month",
    bars: [40, 60, 45, 80, 50, 70, 90, 65, 55, 75, 85, 100],
    activeBarIndex: 7,
    activeBarColor: "#ff6b35",
  },
  {
    title: "Task Completed",
    count: "185",
    change: "45",
    changeColor: "purple",
    period: "Current Month",
    bars: [50, 70, 55, 85, 60, 75, 95, 70, 65, 80, 90, 100],
    activeBarIndex: 6,
    activeBarColor: "#9b59b6",
  },
  {
    title: "Monthly Tasks Summary",
    count: "1,240",
    change: "145",
    changeColor: "green",
    period: "Current Month",
    bars: [60, 80, 65, 90, 70, 85, 100, 75, 70, 85, 95, 100],
    activeBarIndex: 6,
    activeBarColor: "#27ae60",
  },
];

export const latestTransactions: Transaction[] = [
  {
    id: "1",
    date: "Mon, Mar 1",
    description: "Payment Sent to Shakir",
    amount: "$560.00",
    type: "expense",
  },
  {
    id: "2",
    date: "Mon, Mar 1",
    description: "Salary from Redwhale",
    amount: "$12,200.00",
    type: "income",
  },
  {
    id: "3",
    date: "Mon, Mar 1",
    description: "Money Sent to Wise.com",
    amount: "$3,000.00",
    type: "expense",
  },
  {
    id: "4",
    date: "Mon, Mar 1",
    description: "Purchased Macbook Pro",
    amount: "$5560.00",
    type: "expense",
  },
];

export const upcomingTransactions: Transaction[] = [
  {
    id: "5",
    date: "Today",
    description: "Water Bill",
    amount: "$280",
    type: "expense",
    status: "unsuccess",
    icon: "💧",
  },
  {
    id: "6",
    date: "Tomorrow",
    description: "Income: Salary Oct",
    amount: "$1200",
    type: "income",
    status: "success",
    icon: "💰",
  },
  {
    id: "7",
    date: "Tomorrow",
    description: "Electric Bill",
    amount: "$480",
    type: "expense",
    status: "success",
    icon: "⚡",
  },
  {
    id: "8",
    date: "Tomorrow",
    description: "Income: Jane transfers",
    amount: "$500",
    type: "income",
    status: "success",
    icon: "📦",
  },
  {
    id: "9",
    date: "Tomorrow",
    description: "Income: Jane transfers",
    amount: "$500",
    type: "income",
    status: "success",
    icon: "📦",
  },
];
