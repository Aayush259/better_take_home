
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export interface IWhyBetter {
    name: string;
    image: string;
}

export interface IGotQuestions {
    title: string;
    description: string;
    image: string;
}

export interface IGotQuestionCategory {
    categoryName: string;
    questions: IGotQuestions[];
}

export interface ICalculatorInput {
    homePrice: number;       // In dollars
    downPayment: number;     // In dollars
    interestRate: number;    // Annual interest rate in percentage (e.g., 4.5)
    loanTerm: number;        // In years (e.g., 30)
    propertyTaxes: number;   // Monthly property taxes in dollars
    homeInsurance: number;   // Monthly homeowners insurance in dollars
    hoaFees: number;         // Monthly HOA fees in dollars
    utilities: number;       // Monthly utilities cost in dollars
}
