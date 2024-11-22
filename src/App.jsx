import React from "react";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./Layout/PageLayout";





function App() {
  return (
   <PageLayout>
   <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/auth' element={<Auth/>}/>

   </Routes>
   </PageLayout>
    
  );
}

export default App;
