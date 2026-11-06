import "./IncomeDetails_2.css";
import { ArrowLeftRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function IncomeDetails_2({ selectedCategory, onBack, onNext }) {
  const Icon = selectedCategory.icon;

  const [sourceName, setSourceName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [startDate, setStartDate] = useState("");

  // Today's date in local YYYY-MM-DD format.
  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  function handleContinue(event) {
    event.preventDefault();

    if (startDate && startDate < minDate) {
      return;
    }

    const incomeData = {
      sourceName: sourceName.trim(),
      incomeAmount,
      startDate,
    };

    onNext(incomeData);
  }

  return (
    <>
      <div className="income-title">
        <span
          className="income-title-icon"
          style={{
            backgroundColor: selectedCategory.iconBg,
            color: selectedCategory.iconColor,
          }}
        >
          <Icon size={28} />
        </span>

        <div className="income-title-content">
          <h2>{selectedCategory.name}</h2>
          <p>{selectedCategory.description}</p>
        </div>

        <button type="button" className="change-category-btn" onClick={onBack}>
          <ArrowLeftRight size={16} />
          Change Income Category
        </button>
      </div>

      <form className="income-details-form" onSubmit={handleContinue}>
        <div className="income-form-field">
          <label htmlFor="sourceName">Source name (Optional)</label>

          <input
            id="sourceName"
            type="text"
            placeholder="Main Job"
            value={sourceName}
            onChange={(event) => setSourceName(event.target.value)}
          />

          <p>
            Give this income source a name to easily identify it (e.g. Main Job,
            Part-time Job).
          </p>
        </div>

        <div className="income-form-grid">
          <div className="income-form-field">
            <label htmlFor="incomeSource">Monthly Income (After Tax)</label>

            <div className="income-field-with-icon">
              <span className="income-pound-symbol">£</span>

              <input
                id="incomeSource"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={incomeAmount}
                onChange={(event) => setIncomeAmount(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="income-form-field">
            <label htmlFor="startDate">Start Date (Optional)</label>

            <input
              id="startDate"
              type="date"
              min={minDate}
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />

            <p>Choose today or a future date.</p>
          </div>
        </div>

        <div className="income-form-actions">
          <button type="button" className="back-btn" onClick={onBack}>
            <ArrowLeft size={16} />
            Back
          </button>

          <button type="submit" className="save-btn">
            <ArrowRight size={16} />
            Save & Continue
          </button>
        </div>
      </form>
    </>
  );
}
