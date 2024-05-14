import User from "./components/User/user";
import Admin from "./components/Admin/admin";
import Adding from "./components/Adding/Add";
import Intro from "./components/Intro/intro";
import ReactDatePicker from "./components/Date/datePicker";
import ShowClock from "./components/Intro/Clock/clock";
import "./App.css";
import Edit from "./components/Edit/edit";




function App() {
  return (
    <div className="container">
       <Intro />
      <ShowClock />
      <ReactDatePicker />
      <User />
      <Admin />
      <Adding />
      <Edit />

      
      
        
    </div>
  );
}

export default App;
