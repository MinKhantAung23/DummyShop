import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import LoadingSpinner from "./components/spinner/LoadingSpinner.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
  </Provider>
);
