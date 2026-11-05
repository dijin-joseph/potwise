import "./IncomeDetails_2.css";
import { ArrowLeftRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function IncomeDetails_2({ selectedCategory, onBack, onNext }) {
  const Icon = selectedCategory.icon;
  const [sourceName, setSourceName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [frequency, setFrequency] = useState("Monthly");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

      {/* We'll build the form together here */}
      <form className="income-details-form">
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
            <label htmlFor="incomeSource">Income (After Tax)</label>

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
              />
            </div>
          </div>
          <div className="income-form-field">
            <label htmlFor="frequency">Frequency</label>
            <select
              id="frequency"
              value={frequency}
              onChange={(event) => setFrequency(event.target.value)}
            >
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
          </div>
          <div className="income-form-field">
            <label htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(event) => {
                setStartDate(event.target.value);
              }}
            />
          </div>
          <div className="income-form-field">
            <label htmlFor="endDate">End Date (Optional)</label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(event) => {
                setEndDate(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="income-form-actions">
          <button type="button" className="back-btn" onClick={onBack}>
            <ArrowLeft size={16} />
            Back
          </button>
          <button type="button" className="save-btn" onClick={onNext}>
            <ArrowRight size={16} />
            Save & Continue
          </button>
        </div>
      </form>
    </>
  );
}
