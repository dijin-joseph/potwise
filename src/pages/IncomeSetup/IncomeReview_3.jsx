import "./IncomeReview_3.css";
import { ClipboardCheck, Pencil, Trash2 } from "lucide-react";

export default function IncomeReview_3({ incomeSources }) {
  console.log("Income sources in review:", incomeSources);
  return (
    <div className="review-container">
      <div className="review-header">
        <span className="income-title-icon">
          <ClipboardCheck size={28} />
        </span>

        <div className="income-title-content">
          <h2>Review Your Income</h2>
          <p>
            Check the details of your income sources. You can add another
            source, edit or remove one before completing.
          </p>
        </div>
      </div>

      <div className="income-review-content">
        <h2>Your Income Sources</h2>
        <div className="income-review-container">
          <ul>
            <li>Income Source</li>
            <li>Total Income</li>
            <li>Frequency</li>
            <li>Start Date</li>
            <li>End Date</li>
            <li className="income-actions">
              <button type="button" className="income-edit-btn">
                <Pencil size={16} />
                Edit
              </button>

              <button type="button" className="income-remove-btn">
                <Trash2 size={16} />
                Remove
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
