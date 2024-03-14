import { useState } from "react";
import "./BossAPI.css";
import { useEffect } from "react";

export const BossCards = () => {
  const [bossData, setBossData] = useState([]);
  let limit = 200;
  const url = `https://eldenring.fanapis.com/api/bosses?limit=${limit}`;

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        setBossData(data.data);
    }
    fetchData();
  }, []);

  return (
    <div id="bossCards">
      {bossData.map((boss) => (
        <div key={boss.id}>
          <div className="boss-image">
            <img
              src={
                boss.image
                  ? boss.image
                  : "https://user-images.githubusercontent.com/88409867/128100295-6da3345d-e5b3-472f-9d37-9b849c21f810.png"
              }
              alt={boss.name}
            />
          </div>
          <h2>{boss.name}</h2>
          <p>
            <strong>Region:</strong> {boss.region}
          </p>
          <p>
            <strong>Description:</strong> {boss.description}
          </p>
          <p>
            <strong>Location:</strong> {boss.location}
          </p>
          <p>
            <strong>Drops:</strong>
          </p>
          <ul>
            {boss.drops.map((drop, index) => (
              <li key={"drop"+index}>{drop}</li>
            ))}
          </ul>
          <p>
            <strong>Health:</strong> {boss.healthPoints}
          </p>
        </div>
      ))}
    </div>
  );
};
