import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Ronald",
    lastName: "Bagenda",
    email: "test@gmail.com",
    $id: "1",
    userId: "1",
    dwollaCustomerUrl: "1",
    dwollaCustomerId: "1",
    address1: "1",
    city: "1",
    state: "1",
    postalCode: "1",
    dateOfBirth: "1",
    ssn: "1",
    name: "Ronald Bagenda", // Add the 'name' property
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={123}
          />
        </header>
        recent transactions
      </div>
      <RightSidebar user={loggedIn} transactions={[1]} banks={[2]} />
    </section>
  );
};

export default Home;
