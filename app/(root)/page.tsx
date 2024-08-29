import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    lastName: "Coder",
    firstName: "Chardie",
    email: "contact@chardiecode.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            subtext="Access and manage your account and transactions efficiently"
            title="Welcome"
            type="greeting"
            user={loggedIn?.firstName || "Guest"}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={1250.85}
          />
        </header>
      </div>
      <RightSidebar
        banks={[{ currentBalance: 12345.5 }, { currentBalance: 67890.8 }]}
        transactions={[]}
        user={loggedIn}
      />
    </section>
  );
};

export default Home;
