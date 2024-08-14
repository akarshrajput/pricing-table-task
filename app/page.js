import React from "react";
import Section from "./_components/Section";
import InfoText from "./_components/InfoText";
import Container from "./_components/Container";
import PricingTable from "./_components/PricingTable";
import DarkModeToggle from "./_components/DarkModeToggle";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center">
      <Container>
        <div className="flex items-center">
          <DarkModeToggle />
          <p className="ml-auto text-stone-800 dark:text-stone-50">
            by Akarsh Rajput
          </p>
        </div>

        <Section title="API Pricing" />
        <InfoText>
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </InfoText>
        <PricingTable />
        <Section title="Token Estimation" />
        <InfoText>
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </InfoText>
        <Section title="Billing" />
        <InfoText>
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </InfoText>
      </Container>
    </div>
  );
};

export default Home;
