import "./App.css";
import "./styles/styles.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  const MainLayout = React.lazy(() => import("./templates/MainLayout"));

  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props) => <MainLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
