import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        {/* Redirect from / to /signup */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* <Route path="*" element={<SignIn />} /> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
