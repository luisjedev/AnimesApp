import { FavAnimesContextProvider } from "./contexts/fav-animes-context";
import { AppRoutes } from "./routes";

function App() {
  return (
    <FavAnimesContextProvider>
      <AppRoutes />
    </FavAnimesContextProvider>
  );
}

export default App;
