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

      <div className="income-container">
        <h1>Hello</h1>
      </div>
    </div>
  );
}
