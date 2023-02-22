import { Divider, Input } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function AddFoodForm({ setFoodsState }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hello', { name, image, calories, servings, id: uuidv4()});
    setFoodsState(prevFoods => {
        return [...prevFoods, { name, image, calories, servings, id: uuidv4() }]
    })
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        style={{ width: "250px" }}
        value={name}
        type="text"
        onChange={(event) => setName(event.target.value)}
      />

      <label>Image</label>
      <Input
        style={{ width: "250px" }}
        value={image}
        type="text"
        onChange={(event) => setImage(event.target.value)}
      />
      <label>Calories</label>
      <Input
        style={{ width: "250px" }}
        value={calories}
        type="number"
        onChange={(event) => setCalories(event.target.value)}
      />
      <label>Servings</label>
      <Input
        style={{ width: "250px" }}
        value={servings}
        type="number"
        onChange={(event) => setServings(event.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
