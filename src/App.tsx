import { AnimesContextProvider } from "./contexts/animes-context";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AnimesContextProvider>
      <AppRoutes />
    </AnimesContextProvider>
  );
}

export default App;
