import { checkIfUserCompletedOnboarding } from "@/lib/checkIfUserCompletedOnboarding";

const Dashboard = async () => {
  const session = await checkIfUserCompletedOnboarding("/dashboard");

  return (
    <>
      <main className="h-full w-full">Dashboard Page</main>
    </>
  );
};

export default Dashboard;
