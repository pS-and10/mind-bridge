import Card from "./Card";
import cardsData from "./carddata";
import Heading from "./Heading";

export default function Main() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-6 py-12">
      
      <Heading />

      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            path={card.path}
          />
        ))}
      </div>

    </div>
  );
}
