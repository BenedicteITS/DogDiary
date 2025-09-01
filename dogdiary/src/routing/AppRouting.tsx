import { Route, Routes } from "react-router-dom"
import HomeView from "../views/homeView";
import FormsView from "../views/formsView";
import MyPetsView from "../views/myPetsView";
import RegisterNewFormView from "../views/registerNewFormView";

const AppRouting = () => {
    return(
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="myPets" element={<MyPetsView/>}/>
                <Route path="registerNewForm" element={<RegisterNewFormView/>}/>
                <Route path="forms" element={<FormsView/>}/>
            </Routes>
    )
}

export default AppRouting;