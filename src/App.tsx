import React, { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Admin } from "./pages/Admin/containers/Admin";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuth,
  selectUserLoadingStatus,
} from "./store/ducks/user/selectors";
import { SigninForm } from "./pages/Auth/components/SigninForm/SigninForm";
import { SignupForm } from "./pages/Auth/components/SignupForm/SignupForm";
import {
  fetchUserData,
  setUserErrors,
  setUserLoadingStatus,
  setUserResponse,
} from "./store/ducks/user/actionCreators";
import { RestoreForm } from "./pages/Auth/components/RestoreForm/RestoreForm";
import { ForgotForm } from "./pages/Auth/components/ForgotForm/ForgotForm";
import { Loader } from "./shared/Global/Loader/Loader";
import { LoadingStatus } from "./store/types";
import { Header } from "./shared/Global/Header/Header";
import { Profile } from "./pages/Profile/containers/Profile";

import { ErrorPage } from "./pages/404/containers/404";

import "./styles/global.scss";
import { Logs } from "./pages/Logs/containers/Logs";

function App() {
  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserLoadingStatus);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [redirect, setRedirect] = useState<boolean>(false);
  const [page, setPage] = useState<string>("Главная");

  const currentPath = location.pathname;
  const authPaths = ["/signin", "/signup"];

  useEffect(() => {
    dispatch(fetchUserData());
  }, [isAuth]);

  useEffect(() => {
    dispatch(setUserLoadingStatus(LoadingStatus.LOADED));
    dispatch(setUserErrors(undefined));
    dispatch(setUserResponse(undefined));
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="page">
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Admin} />

            <Route exact path="/admin" component={Admin} />

            <Route exact path="/logs" component={Logs} />

            <Route exact path="/profile" component={Profile} />

            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;