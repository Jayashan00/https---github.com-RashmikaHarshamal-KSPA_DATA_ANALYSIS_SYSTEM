import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./ChecklistPopupPage.css";

const ChecklistPopupPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const steps = [1, 2, 3, 4];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="step-card">
            <button className="orange-btn" onClick={nextStep}>
              Mechanical CheckList
            </button>
            <button className="orange-btn" onClick={nextStep}>
              Electrical CheckList
            </button>
          </div>
        );
      case 1:
        return (
          <div className="step-card table-card">
            <table>
              <tbody>
                <tr>
                  <td rowSpan="3" className="bold-text">
                    PM Checklist <br /> CL/PM/03
                  </td>
                  <td>
                    <span className="bold-text">Date</span> <span>View</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="bold-text">Time</span> <span>View</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="bold-text">Machine Speed</span> <span>View</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="btn-row">
              <button className="orange-btn" onClick={nextStep}>
                Next
              </button>
              <button className="orange-btn" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-card table-card">
            <table>
              <tbody>
                <tr>
                  <td>
                    <span className="bold-text">Shift Engineer</span> <span>View</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="bold-text">Technician</span> <span>View</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="bold-text">Shift</span> <span>View</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="btn-row">
              <button className="orange-btn" onClick={nextStep}>
                Next
              </button>
              <button className="orange-btn" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-card">
            <button className="orange-btn" onClick={() => navigate("/dashboard")}>
              Day
            </button>
            <button className="orange-btn" onClick={() => navigate("/dashboard")}>
              Night
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="checklist-layout">
      <Sidebar />
      <div className="checklist-content">
        <Header />
        <div className="checklist-main">
          {/* Progress bar */}
          <div className="progress-bar">
            {steps.map((step, index) => (
              <React.Fragment key={step}>
                <div
                  className={`circle ${
                    index < currentStep
                      ? "completed"
                      : index === currentStep
                      ? "active"
                      : ""
                  }`}
                >
                  {index < currentStep ? "✔" : step}
                </div>
                {index < steps.length - 1 && <div className="line"></div>}
              </React.Fragment>
            ))}
          </div>

          {/* Step content */}
          {renderStepContent()}

          {/* Prev button */}
          {currentStep < steps.length - 1 && (
            <div className="nav-buttons">
              {currentStep > 0 && (
                <button onClick={prevStep} className="black-btn">
                  Previous
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChecklistPopupPage;
