import { RouteObject } from "react-router-dom";
import App from "../app/App";
import MusicPage from "../pages/MusicPage";
import SportsPage from "../pages/SportsPage";
import ArtTheater from "../pages/ArtTheater";
import Family from "../pages/Family";
import Experiences from "../pages/Experiences";
import Festivals from "../pages/Festivals";
import Layout from "../layouts/Layout";

export const routes: Array<RouteObject> = [   
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/music",
        element: <MusicPage />,
      },
      {
        path: "/sports",
        element: <SportsPage />,
      },
      {
        path: "/art-and-theater",
        element: <ArtTheater />,
      },
      {
        path: "/family",
        element: <Family />,
      },
      {
        path: "/experiences",
        element: <Experiences />,
      },
      {
        path: "/festivals",
        element: <Festivals />,
      }
    ]
  }
]