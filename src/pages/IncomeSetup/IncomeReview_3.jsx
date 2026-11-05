import "./IncomeReview_3.css";
import { ClipboardCheck } from "lucide-react";

export default function IncomeReview_3() {
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
            <li>
              <button>Edit</button>
              <button>Edit</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
