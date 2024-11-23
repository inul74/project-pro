import { checkIfUserCompletedOnboarding } from "@/lib/checkIfUserCompletedOnboarding";

const Dashboard = async () => {
  const session = await checkIfUserCompletedOnboarding("/dashboard");
  console.log(session);

  return (
    <>
      <main className="h-full w-full">Dashboard Page</main>
    </>
  );
};

export default Dashboard;
