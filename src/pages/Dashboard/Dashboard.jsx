import "./Dashboard.css";
import {
  ChevronLeft,
  ChevronRight,
  Wallet,
  Plus,
  ReceiptPoundSterling,
  LayoutGridCircles,
  Target,
  PiggyBank,
} from "lucide-react";
import { useNavigate } from "react-router";
const summaryCards = [
  {
    id: "income",
    label: "Monthly Income",
    amount: 0,
    icon: ReceiptPoundSterling,
    color: "green",
  },
  {
    id: "allocations",
    label: "Total Allocations",
    amount: 0,
    icon: LayoutGridCircles,
    color: "orange",
  },
  {
    id: "savings",
    label: "Planned Savings",
    amount: 0,
    icon: Target,
    color: "blue",
  },
  {
    id: "actual-savings",
    label: "Actual Savings",
    amount: 0,
    icon: PiggyBank,
    color: "purple",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-heading">
          <h1>Dashboard</h1>
          <p>Your financial overview for October 2026</p>
        </div>

        <div className="calendar-container">
          <button
            className="previous-month-btn"
            type="button"
            aria-label="Previous month"
          >
            <ChevronLeft size={18} />
          </button>

          <span>October 2026</span>

          <button
            className="next-month-btn"
            type="button"
            aria-label="Next month"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="dashboard-card-container">
        {summaryCards.map((item) => {
          const Icon = item.icon;
          return (
            <div className="dashboard-cards" key={item.id}>
              <div className="icon-container">
                <div className={`card-icon-background ${item.color}`}>
                  <Icon size={24} />
                </div>

                <div className="card-text-container">
                  <span className="card-label">{item.label}</span>
                  <span className="card-amount">£{item.amount}</span>
                  <span className="card-status">No data entered</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <section className="start-saving-container">
        <div className="wallet-container">
          <Wallet className="wallet-icon" size={28} />
        </div>

        <h2>Welcome to PotWise</h2>

        <p className="welcome-description">
          Start by entering your monthly take-home income. Then create spending
          and savings pots to plan where your money goes.
        </p>

        <button
          className="setup-income-btn"
          type="button"
          onClick={() => navigate("/income/setup")}
        >
          <Plus size={18} />
          Set up monthly income
        </button>

        <p className="welcome-note">
          Your financial information will be stored locally in your browser.
        </p>
      </section>
    </div>
  );
}
