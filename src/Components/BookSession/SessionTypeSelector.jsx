import Card from "../Main/Card";
import CardsData from "./CardData";
import Button from "./Button";

export default function SessionTypeSelector() {
  return (
     
      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto  ">
        {CardsData.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            duration={card.duration}
            price={card.price}
            path={card.path}
          />
        ))}
      </div>
    
  );
}
