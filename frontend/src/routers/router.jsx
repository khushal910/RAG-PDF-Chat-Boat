import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import GetPdf from "../pages/GetPdf.jsx";
import Chat from "../pages/Chat.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/get-pdf",
    element: <GetPdf />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

export default router;
