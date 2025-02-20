import { IGotQuestionCategory, IWhyBetter } from "./interfaces";

export const whyBetterData: IWhyBetter[] = [
    {
        name: "Arian",
        image: "/still-quote-Arian.webp"
    },
    {
        name: "Amanda",
        image: "/still-quote-Amanda.webp"
    },
    {
        name: "Paul",
        image: "/still-quote-Paul.webp"
    },
];

export const gotQuestionsData: IGotQuestionCategory[] = [
    {
        categoryName: "Our Products",
        questions: [
            {
                title: "Buying your first home with Better",
                description: "",
                image: "/first-home.webp",
            },
            {
                title: "One Day Mortgage",
                description: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
                image: "/one-day-mortgage.webp",
            },
            {
                title: "Better HELOC",
                description: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit2. Access up to 90% of your home equity as cash in as little as 7 days.",
                image: "/better-heloc.webp",
            },
            {
                title: "Insurance",
                description: "",
                image: "/insurance.webp",
            },
        ]
    },
    {
        categoryName: "Calculators",
        questions: [
            {
                title: "Mortgage calculator",
                description: "",
                image: "/mortgage-calculator.webp",
            },
            {
                title: "Affordability calculator",
                description: "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
                image: "/affordability-calculator.webp",
            },
            {
                title: "HELOC calculator",
                description: "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
                image: "/heloc-calculator.webp",
            },
            {
                title: "Fixed-rate loan comparison calculator",
                description: "",
                image: "/fixed-rate-calculator.webp",
            },
        ]
    },
    {
        categoryName: "Guides & FAQs",
        questions: [
            {
                title: "What is a good debt-to-income ratio for a home loan?",
                description: "",
                image: "/good-dti.webp",
            },
            {
                title: "Buying a house without realtor",
                description: "Thinking about buying a house without a real estate agent? Read this first.",
                image: "/buy-house-without-realtor.webp",
            },
            {
                title: "Timeline for homebuying process",
                description: "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
                image: "/loan-timeline.webp",
            },
            {
                title: "Conventional loan requirements",
                description: "",
                image: "/conventional-loan.webp",
            },
        ]
    },
]
