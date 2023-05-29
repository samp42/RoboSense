import "./App.css";
import { useLocation, useRoutes } from "@solidjs/router";

import { routes } from "./routes";

function App() {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <div class="container">
      <main>
          <Route />
      </main>
    </div>
  );
}

export default App;
