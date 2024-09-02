import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            subtext="Access and manage your account and transactions efficiently"
            title="Welcome"
            type="greeting"
            user={loggedIn?.name || "Guest"}
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
