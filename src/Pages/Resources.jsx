import Navbar from "../Components/Navbar/Navbar";
import ResourcesHeader from "../Components/Resources/ResourcesHeader";
import CategoryFilter from "../Components/Resources/CategoryFilter";
import { useState } from "react";
import ResourceCard from "../Components/Resources/ResourceCard";
import Footer from "./Footer";

export default function Resources() {
  const categories = ["All", "Anxiety", "Stress", "Sleep", "Self Care"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const resourcesData = [
    {
      id: 1,
      title: "5-Minute Breathing Exercise",
      description: "A quick breathing technique to calm anxiety.",
      category: "Anxiety",
    },
    {
      id: 2,
      title: "Improve Sleep Hygiene",
      description: "Simple habits to improve your sleep quality.",
      category: "Sleep",
    },
    {
      id: 3,
      title: "Daily Self Care Routine",
      description: "Small actions that boost mental wellness.",
      category: "Self Care",
    },
  ];


  const filteredResources =
    selectedCategory === "All"
      ? resourcesData
      : resourcesData.filter(
          (resource) => resource.category === selectedCategory,
        );
  return (
    <>
      <Navbar />
      <div>
        <ResourcesHeader />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div style={styles.grid}>
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              category={resource.category}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px",
  },
};
