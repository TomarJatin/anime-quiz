import "react-native-gesture-handler";
import Navigation from './screens';
import { DataProvider } from "./contexts/DataContext";


export default function App() {
  return (
    <DataProvider>
      <Navigation />
    </DataProvider>
  );
}
