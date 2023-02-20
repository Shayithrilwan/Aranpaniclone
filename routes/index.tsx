import React, { FC, useContext, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import isAuthenticated from "../shared/components/HOC/requireAuth";
import Home from "../views/Home";
import { RouterProps } from "../shared/types/route.type";
import { AppRoutes } from "./routeConstants/appRoutes";
import Login from "../views/Login/login.js";
import Dashboard from "../views/Login/loginforms/dashboard";
import Project from "../project/project";
import Donors from "../donors/donors";
import Representation from "../representations/representation";
import Payment from "../Payment/payment";
import Internalusers from "../internalusers/interusers";
import Subscriptions from "../Subcriptions/subcriptions";
import Contactdeatils from "../contactdetails/contactdetails";
import donoruserupdate from "../donors/donors";
import Update from "../userUpdate/donorUserUpdate";


export const appHistory = createBrowserHistory();

const AppRouter = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/" element={isAuthenticated(< Home />)} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={< Dashboard />} />
          <Route path="/project" element={< Project />} />
          <Route path="/donors" element={< Donors />} />
          <Route path="/representation" element={< Representation />} />
          <Route path="/payment" element={< Payment />} />
          <Route path="/internalusers" element={< Internalusers/>} />
          <Route path="/subscriptions" element={< Subscriptions/>} />
          <Route path="/contactdeatils" element={< Contactdeatils/>} />
          <Route path="/update" element={< Update/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default AppRouter;
