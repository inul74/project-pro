import { AdditionalInfoSection } from "@/components/onboarding/AdditionalInfoSection";
import { OnboardingFormProvider } from "@/context/OnboardingForm";
import { checkIfUserCompletedOnboarding } from "@/lib/checkIfUserCompletedOnboarding";

const Onboarding = async () => {
  const session = await checkIfUserCompletedOnboarding("/onboarding");

  return (
    <OnboardingFormProvider session={session}>
      <AdditionalInfoSection profileImage={session.user.image} />
    </OnboardingFormProvider>
  );
};

export default Onboarding;
