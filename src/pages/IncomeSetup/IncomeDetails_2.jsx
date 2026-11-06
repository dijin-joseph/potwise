import "./IncomeDetails_2.css";
import {
  ArrowLeftRight,
  ArrowLeft,
  ArrowRight,
  CalendarSync,
  Layers,
  Info,
} from "lucide-react";
import { useState } from "react";

export default function IncomeDetails_2({
  selectedCategory,
  initialData,
  onBack,
  onNext,
}) {
  const Icon = selectedCategory.icon;

  const [sourceName, setSourceName] = useState(initialData?.sourceName ?? "");

  const [incomeAmount, setIncomeAmount] = useState(
    initialData?.incomeAmount ?? ""
  );

  const [startDate, setStartDate] = useState(initialData?.startDate ?? "");
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
      incomeFrequency,
    };

    onNext(incomeData);
  }

  function handleBackToCategory() {
    onBack({
      sourceName,
      incomeAmount,
      startDate,
      incomeFrequency,
    });
  }
  const [incomeFrequency, setIncomeFrequency] = useState(
    initialData?.incomeFrequency ?? "recurring"
  );
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

        <button
          type="button"
          className="change-category-btn"
          onClick={handleBackToCategory}
        >
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
            <label htmlFor="incomeSource">
              {incomeFrequency === "recurring"
                ? "Monthly Income (After Tax)"
                : "One-time Income (After Tax)"}
            </label>

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
            <label htmlFor="startDate">Pay Date (Optional)</label>

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

        {/* ========================================
    INCOME FREQUENCY
======================================== */}

        <div className="income-frequency-section">
          <div className="income-frequency-top">
            <div className="income-frequency-intro">
              <h3>Income Frequency</h3>
              <p>
                Choose whether this income repeats each month or is a one-time
                payment.
              </p>
            </div>

            <div className="income-frequency-options">
              {/* RECURRING MONTHLY */}
              <label
                className={`frequency-option ${
                  incomeFrequency === "recurring" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="incomeFrequency"
                  value="recurring"
                  checked={incomeFrequency === "recurring"}
                  onChange={(event) => setIncomeFrequency(event.target.value)}
                />

                <CalendarSync size={28} className="frequency-icon" />

                <div className="frequency-option-text">
                  <h4>Recurring Monthly</h4>
                  <p>Repeats every month from the selected start date.</p>
                </div>
              </label>

              {/* ONE-TIME INCOME */}
              <label
                className={`frequency-option ${
                  incomeFrequency === "one-time" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="incomeFrequency"
                  value="one-time"
                  checked={incomeFrequency === "one-time"}
                  onChange={(event) => setIncomeFrequency(event.target.value)}
                />

                <Layers size={28} className="frequency-icon" />

                <div className="frequency-option-text">
                  <h4>One-time (Non-recurring)</h4>
                  <p>A single payment that doesn't repeat.</p>
                </div>
              </label>
            </div>
          </div>

          {/* INFORMATION MESSAGE */}
          <div className="income-frequency-info">
            <Info size={19} />

            {incomeFrequency === "recurring" ? (
              <p>
                <strong>How it works:</strong> This income is scheduled every
                month based on your selected start date. You can edit or remove
                it anytime.
              </p>
            ) : (
              <p>
                <strong>How it works:</strong> This is a one-time income payment
                and will not repeat in future months.
              </p>
            )}
          </div>
        </div>

        <div className="income-form-actions">
          <button
            type="button"
            className="back-btn"
            onClick={handleBackToCategory}
          >
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
