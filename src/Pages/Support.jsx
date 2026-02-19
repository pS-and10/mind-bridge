import SupportHeader from "../Components/Support/SupportHeader";
import EmergencyCard from "../Components/Support/EmergencyCard";
import ProfessionalSupportCard from "../Components/Support/ProfessionalSupportCard";
import CampusSupportCard from "../Components/Support/CampusSupportCard";
import SelfHelpRedirectCard from "../Components/Support/SelfHelpRedirectCard";
import Disclaimer from "../Components/Support/Disclaimer";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "./Footer";

export default function Support() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-teal-50 px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <SupportHeader />
        <EmergencyCard />
        
        <div className="grid md:grid-cols-2 gap-6">
          <ProfessionalSupportCard />
          <CampusSupportCard />
        </div>

        <SelfHelpRedirectCard />
        <Disclaimer />
      </div>
    </div>
    <Footer />
    </>
  );
}
