import { useState } from "react";
import Accordian from "./component/Accordian";
import "./App.css";

function App() {
  const faqData = [
    {
      heading: "Esim FAQ",
      faq1id: "esim-what",
      faq1title: "What is an eSIM?",
      faq1content:
        "An eSIM (embedded SIM) is a digital SIM card built directly into your device. It allows you to activate cellular plans digitally without needing a physical SIM card.",
    },
    {
      faq2id: "esim-devices",
      faq1title: "Which devices support eSIM?",
      faq1content:
        "Many modern smartphones support eSIM, including recent iPhone models (iPhone XS and newer), Google Pixel phones, Samsung Galaxy devices, and select iPads.",
    },
    {
      faq3id: "esim-dual",
      faq1title: "Can I use both eSIM and physical SIM simultaneously?",
      faq1content:
        "Yes, most eSIM-compatible devices support Dual SIM functionality, allowing you to use both an eSIM and a physical SIM card at the same time.",
    },
    {
      faq4id: "esim-activation",
      faq1title: "How do I activate an eSIM?",
      faq1content:
        "To activate an eSIM, you typically scan a QR code provided by your carrier or enter the activation details manually in your device settings.",
    },
    {
      faq5id: "esim-benefits",
      faq1title: "What are the advantages of using an eSIM?",
      faq1content:
        "eSIMs offer several benefits: easy switching between carriers, no physical SIM card needed, ability to store multiple profiles, and environmentally friendly.",
    },
  ];

  return (
    <>
      <h1>Esim Faq's</h1>
      <div>
        <Accordian faqData={faqData} />
      </div>
    </>
  );
}

export default App;
