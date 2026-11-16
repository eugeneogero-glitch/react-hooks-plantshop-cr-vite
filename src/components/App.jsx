import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  const handleAddPlant = (newPlantData) => {
    const plantPayload = {
      ...newPlantData,
      price: Number(newPlantData.price),
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantPayload),
    })
      .then((r) => r.json())
      .then((newPlant) => {
        setPlants([...plants, newPlant]);
      });
  };

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={displayedPlants}
        onAddPlant={handleAddPlant}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
}

export default App;
