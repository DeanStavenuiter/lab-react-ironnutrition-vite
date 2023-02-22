import { useState } from "react";
import "./App.css";
import { Row, Divider, Button } from "antd";
import foods from './foods.json'
import FoodBox from "../src/components/FoodBox";
import AddFoodForm from "../src/components/AddFoodForm";
import SearchBar from "./components/SearchBar";

function App() {

  const [foodsState, setFoodsState] = useState(foods)

  return (
    <div className="App">
      <AddFoodForm setFoodsState={setFoodsState}/>
      <Button> Hide Form / Add New Food </Button>

      <SearchBar foods={foods} setFoodsState={setFoodsState}/>
      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
      <FoodBox foodsState={foodsState} setFoodsState={setFoodsState}/>
      </Row>
    </div>
  );
}
export default App;
