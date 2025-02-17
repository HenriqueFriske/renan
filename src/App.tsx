import classNames from "classnames";
import { useState } from "react";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Planejamento",
    "Preço e proposta de valor",
    "Processos",
    "Qualidade e maturidade",
    "Metas e gestão",
    "Resultados",
    "CRM e dados",
    "Experiencia do cliente",
  ];

  return (
    <div className="text-text">
      <aside className="h-[100vh] flex items-center justify-center w-96 bg-custom-aside">
        <ul className="flex flex-col gap-4">
          {steps.map((step, index) => {
            const isBlue = activeStep >= index;
            const isActive = activeStep === index;
            return (
              <li
                className={`flex items-center gap-4 text-2xl ${classNames({
                  "text-blue-text": isBlue,
                })}`}
              >
                <div
                  className={`font-bold w-10 h-10 flex items-center justify-center ${classNames({
                    "bg-white": isActive,
                    
                  })}`}
                >
                  <span>{index + 1}</span>
                </div>
                <span>{step}</span>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

export default App;
