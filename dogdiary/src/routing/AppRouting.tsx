import { Route, Routes } from "react-router-dom"
import HomeView from "../pages/homeView";
import FormsView from "../pages/formsView";
import MyPetsView from "../pages/myPetsView";
import RegisterNewFormView from "../pages/registerNewFormView";

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