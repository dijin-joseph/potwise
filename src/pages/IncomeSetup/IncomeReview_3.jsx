import "./IncomeReview_3.css";
import {
  ClipboardCheck,
  Pencil,
  Trash2,
  Plus,
  ArrowRight,
  ArrowLeft,
  Check,
  Coins,
} from "lucide-react";

export default function IncomeReview_3({
  incomeSources,
  onAddAnother,
  onBack,
  onComplete,
  onEdit,
}) {
  // All configured income amounts are now monthly.
  const totalMonthlyIncome = incomeSources.reduce((total, income) => {
    return total + (Number(income.incomeAmount) || 0);
  }, 0);

  const formatCurrency = (amount) => {
    return Number(amount).toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  };

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="review-container">
      <div className="review-header">
        <span className="income-title-icon">
          <ClipboardCheck size={28} />
        </span>

        <div className="income-title-content">
          <h2>Review Your Income</h2>
          <p>
            Review your configured monthly income sources. You can add another
            source, edit or remove one before completing.
          </p>
        </div>
      </div>

      <div className="income-review-content">
        <div className="income-review-heading">
          <h2>Your Income Sources</h2>
          <span className="income-source-count">
            {incomeSources.length}{" "}
            {incomeSources.length === 1 ? "source" : "sources"} added
          </span>
        </div>

        <div className="income-review-container">
          {incomeSources.map((income, index) => {
            const Icon = income.category.icon;

            return (
              <ul key={index}>
                <li>
                  <span
                    className="income-category-icon"
                    style={{
                      backgroundColor: income.category.iconBg,
                      color: income.category.iconColor,
                    }}
                  >
                    <Icon size={22} />
                  </span>

                  <div>
                    <h3>{income.category.name}</h3>
                    <p>{income.sourceName || "Unnamed source"}</p>
                  </div>
                </li>

                <li>
                  <div>
                    <h3>{formatCurrency(income.incomeAmount)}</h3>
                    <p>Monthly · After Tax</p>
                  </div>
                </li>

                <li>
                  <div>
                    <h3>{formatDate(income.startDate)}</h3>
                    <p>Start Date</p>
                  </div>
                </li>

                <li className="income-actions">
                  <button
                    type="button"
                    className="income-edit-btn"
                    onClick={() => onEdit(index)}
                  >
                    <Pencil size={16} />
                    Edit
                  </button>

                  <button type="button" className="income-remove-btn">
                    <Trash2 size={16} />
                    Remove
                  </button>
                </li>
              </ul>
            );
          })}
        </div>

        <div className="add-income-section">
          <div className="add-income-info">
            <span className="add-income-icon">
              <Plus size={28} />
            </span>

            <div className="add-income-text">
              <h3>Add Another Income Source</h3>
              <p>
                Include additional monthly income such as a part-time job,
                rental income or other source.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="add-income-btn"
            onClick={onAddAnother}
          >
            <Plus size={20} />
            <span>Add Income Source</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="income-monthly-summary">
          <div className="income-summary-info">
            <span className="income-summary-icon">
              <Coins size={28} />
            </span>

            <div className="income-summary-text">
              <h3>Total Monthly Income</h3>
              <p>
                Total configured monthly income after tax. This is not a record
                of payments received.
              </p>
            </div>
          </div>

          <div className="income-summary-amount">
            {formatCurrency(totalMonthlyIncome)}
          </div>
        </div>
      </div>

      <div className="income-review-footer">
        <button
          type="button"
          className="income-review-back-btn"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <button
          type="button"
          className="income-review-complete-btn"
          disabled={!onComplete}
          onClick={onComplete}
        >
          <Check size={20} />
          Complete & Save
        </button>
      </div>
    </div>
  );
}
