import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "./Pages/About";
import Layout from "./Componenets/Layout";
import SideBar from "./Componenets/sideBar";
import AllGrocery from "./GroceryItems/AllGrocery";
import Mobiles from "./GroceryItems/Mobiles";
import Laptop from "./GroceryItems/Laptop";
import HomeAppliances from "./GroceryItems/HomeAppliances";
import BedRooms from "./GroceryItems/BedRooms";
import Cars from "./GroceryItems/Cars";
import MotorBikes from "./GroceryItems/MotorBikes";
import Home from "./Pages/Home";
import PagLayout from "./Pages/PagLayout";
import { useSelector } from "react-redux";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<SideBar />} >
        <Route path="/" element={<PagLayout />}>
            <Route path="All-Grocery" element={<AllGrocery/>}/>
            <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="All-Grocery" element={<AllGrocery />} />
        <Route path="/Mobiles" element={<Mobiles />} />
        <Route path="/Laptops" element={<Laptop />} />
        <Route path="/Home-Appliances" element={<HomeAppliances />} />
        <Route path="/Bed-Rooms" element={<BedRooms />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/MotorBikes" element={<MotorBikes />} />
      </Route>
      <Route path="about" element={<About />} />
    </Route>
  )
);


function App() {
  const Data = useSelector((state)=> state.AllGrocery)
  console.log(Data);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
