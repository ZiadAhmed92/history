
import "./App.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Month1 from "./components/Month1";
import History from "./components/History";
import Day from "./components/Day";
import Week from "./components/Week";
import Month2 from "./components/Month2";
import Month3 from "./components/Month3";
import RealMonth from "./components/RealMonth";
import Month from "./components/Month";
import WelcomeFirst from "./WelcomeFirst.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomeFirst />,
    },
    {
      path: "/:token/:id",
      element: <History />,
      children: [
        {
          path: "",
          element: <Day />,
        },
        {
          path: "week",
          element: <Week />,
        },
        {
          path: "month",
          element: <RealMonth />,
        },
        {
          path: "year",
          element: <Month />,
          children: [
            {
              path: "",
              element: <Month1 />,
            },
            {
              path: "month2",
              element: <Month2 />,
            },
            {
              path: "month3",
              element: <Month3 />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
