import Calculator from "@/components/mortgage/Calculator";
import MortgageExplanation from "@/components/mortgage/MortgageExplanation";
import "@/styles/mortgage.css";

export default function Page() {

    return (
        <main>
            <Calculator />
            <MortgageExplanation />
        </main>
    );
};
