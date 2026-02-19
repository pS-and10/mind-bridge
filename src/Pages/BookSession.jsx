import Navbar from "../Components/Navbar/Navbar";
import SessionTypeSelector from "../Components/BookSession/SessionTypeSelector";
import Heading from "../Components/BookSession/Heading";

export default function BookSession() {
    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-6 py-12">
        <Heading />
        <SessionTypeSelector />
        </div>
        </>
    );
}