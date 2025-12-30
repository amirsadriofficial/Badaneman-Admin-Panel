export interface NavigationItem {
  label: string;
  icon: string;
  isActive?: boolean;
}

export interface SummaryCardData {
  title: string;
  amount?: string;
  currency?: string;
  percentage?: string;
  status?: string;
  statusIcon?: string;
  linkText?: string;
  gradient: string;
}

export interface TaskChartData {
  title: string;
  count: string;
  change: string;
  changeColor: string;
  period: string;
  bars: number[];
  activeBarIndex: number;
  activeBarColor: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: string;
  type: "income" | "expense";
  status?: "success" | "unsuccess";
  icon?: string;
}
