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
                    <p>{income.sourceName}</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>
                      {Number(income.incomeAmount).toLocaleString("en-GB", {
                        style: "currency",
                        currency: "GBP",
                      })}
                    </h3>
                    <p>After Tax</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>{income.frequency}</h3>
                    <p>Frequency</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>
                      {income.startDate
                        ? new Date(
                            `${income.startDate}T00:00:00`
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "—"}
                    </h3>
                    <p>Start Date</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>
                      {income.endDate
                        ? new Date(
                            `${income.endDate}T00:00:00`
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "—"}
                    </h3>
                    <p>End Date</p>
                  </div>
                </li>

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
            );
          })}
        </div>
      </div>
    </div>
  );
}
