import "./IncomeCategorySelection_1.css";
import { useState } from "react";
import IncomeReview_3 from "./IncomeReview_3";
import IncomeDetails_2 from "./IncomeDetails_2";

import {
  BriefcaseBusiness,
  UserRound,
  Building2,
  House,
  TrendingUp,
  PiggyBank,
  Landmark,
  UsersRound,
  BookOpen,
  Ellipsis,
  ChevronRight,
} from "lucide-react";

const incomeCategories = [
  {
    id: 1,
    name: "Employment Income",
    description: "Salary, wages, bonuses or commission.",
    icon: BriefcaseBusiness,
    iconColor: "#059669",
    iconBg: "#DCFCE7",
  },
  {
    id: 2,
    name: "Self-Employment Income",
    description: "Freelance work, consulting or own business.",
    icon: UserRound,
    iconColor: "#0284C7",
    iconBg: "#E0F2FE",
  },
  {
    id: 3,
    name: "Business Income",
    description: "Profits from a business you own.",
    icon: Building2,
    iconColor: "#7C3AED",
    iconBg: "#EDE9FE",
  },
  {
    id: 4,
    name: "Property & Rental Income",
    description: "Rental income from property.",
    icon: House,
    iconColor: "#D97706",
    iconBg: "#FEF3C7",
  },
  {
    id: 5,
    name: "Investments & Savings Income",
    description: "Dividends, interest or investment returns.",
    icon: TrendingUp,
    iconColor: "#DB2777",
    iconBg: "#FCE7F3",
  },
  {
    id: 6,
    name: "Pension & Retirement Income",
    description: "Pension payments or retirement income.",
    icon: PiggyBank,
    iconColor: "#6D28D9",
    iconBg: "#EDE9FE",
  },
  {
    id: 7,
    name: "Government Benefits",
    description: "State benefits or government support.",
    icon: Landmark,
    iconColor: "#BE185D",
    iconBg: "#FCE7F3",
  },
  {
    id: 8,
    name: "Family & Personal Support",
    description: "Financial support from family or other sources.",
    icon: UsersRound,
    iconColor: "#0891B2",
    iconBg: "#CFFAFE",
  },
  {
    id: 9,
    name: "Education Funding",
    description: "Student loans, grants or scholarships.",
    icon: BookOpen,
    iconColor: "#16A34A",
    iconBg: "#DCFCE7",
  },
  {
    id: 10,
    name: "Other Income",
    description: "Any other income source not listed above.",
    icon: Ellipsis,
    iconColor: "#64748B",
    iconBg: "#F1F5F9",
  },
];

export default function IncomeCategorySelection_1() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [incomeSources, setIncomeSources] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [incomeDraft, setIncomeDraft] = useState(null);

  function handleSaveIncome(incomeData) {
    const updatedIncome = {
      ...incomeData,
      category: selectedCategory,
    };

    if (editingIndex !== null) {
      // Update an existing income source
      setIncomeSources((previousSources) =>
        previousSources.map((income, index) =>
          index === editingIndex ? updatedIncome : income
        )
      );
    } else {
      // Add a new income source
      setIncomeSources((previousSources) => [
        ...previousSources,
        updatedIncome,
      ]);
    }

    // Reset editing and temporary form data
    setEditingIndex(null);
    setIncomeDraft(null);

    // Navigate to the Review page
    setCurrentStep(3);
  }

  function handleAddAnother() {
    setEditingIndex(null);
    setSelectedCategory(null);
    setIncomeDraft(null);
    setCurrentStep(1);
  }

  function handleEditIncome(index) {
    const incomeToEdit = incomeSources[index];

    setEditingIndex(index);
    setSelectedCategory(incomeToEdit.category);
    setIncomeDraft({
      sourceName: incomeToEdit.sourceName,
      incomeAmount: incomeToEdit.incomeAmount,
      startDate: incomeToEdit.startDate,
      incomeFrequency: incomeToEdit.incomeFrequency,
    });
    setCurrentStep(2);
  }

  function handleRemoveIncome(indexToRemove) {
    setIncomeSources((previousSources) =>
      previousSources.filter((income, index) => index !== indexToRemove)
    );
  }

  function handleChangeCategory(formData) {
    setIncomeDraft(formData);
    setCurrentStep(1);
  }

  return (
    <div className="income-setup-page">
      <section className="income-category-section">
        {/* Progress indicator */}
        <div className="income-progress">
          <div className="progress-step">
            <span>1</span>
            <p>Income category</p>
          </div>

          <div
            className={`progress-line ${currentStep >= 2 ? "active" : ""}`}
          ></div>

          <div className={`progress-step ${currentStep >= 2 ? "active" : ""}`}>
            <span>2</span>
            <p>Income Details</p>
          </div>

          <div
            className={`progress-line ${
              currentStep >= 3
                ? "active"
                : currentStep === 2
                ? "half-active"
                : ""
            }`}
          ></div>

          <div className={`progress-step ${currentStep >= 3 ? "active" : ""}`}>
            <span>3</span>
            <p>Review & Complete</p>
          </div>
        </div>

        {/* STEP 1: Select income category */}
        {currentStep === 1 ? (
          <>
            <div className="income-category-header">
              <h2>Select an income category</h2>
              <p>
                Choose one type of income you receive. You can add multiple
                income sources later.
              </p>
            </div>

            <div className="income-category-grid">
              {incomeCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <div
                    className="income-category-card"
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentStep(2);
                    }}
                  >
                    <span
                      className="income-category-icon"
                      style={{
                        backgroundColor: category.iconBg,
                        color: category.iconColor,
                      }}
                    >
                      <Icon size={28} />
                    </span>

                    <div className="income-category-content">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                    </div>

                    <div>
                      <ChevronRight />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : currentStep === 2 ? (
          /* STEP 2: Enter income details */

          <IncomeDetails_2
            selectedCategory={selectedCategory}
            initialData={incomeDraft}
            onBack={handleChangeCategory}
            onNext={handleSaveIncome}
          />
        ) : (
          /* STEP 3: Review income */

          <IncomeReview_3
            incomeSources={incomeSources}
            onAddAnother={handleAddAnother}
            onBack={() => setCurrentStep(2)}
            onEdit={handleEditIncome}
            onRemove={handleRemoveIncome}
          />
        )}
      </section>
    </div>
  );
}
