import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Layout>
        <Switch>
          {routes.map((route, index) => {
            return <Route {...route} key={index} />;
          })}
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
