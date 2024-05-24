import ErrorPage from "./components/Error.jsx";
import Form from "./components/Form/Form.jsx";

import ResultsTable, {
  loader as animalLoader,
} from "./components/Table/ResultsTable.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <Form /> },
  {
    path: "/result",
    element: <ResultsTable />,
    loader: animalLoader,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
