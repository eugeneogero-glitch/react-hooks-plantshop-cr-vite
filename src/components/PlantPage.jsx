import React from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, searchTerm, onSearchChange }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
