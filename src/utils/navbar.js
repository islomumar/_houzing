import HomePage from "../pages/Home"
import SignInPage from "../pages/SignIn";
import PropertiesPage from "../pages/Properties"
import { useUniqueId as useId  } from "../hooks/useId";
export const navbar = [
    {
        id: useId,
        element: <HomePage />,
        title: "Home",
        path: "/home",
        private: false,
        hidden: false,
    },
    {
        id: useId,
        element: <PropertiesPage />,
        title: "Properties",
        path: "/properties",
        private: false,
        hidden: false,
    },
    {
        id: useId,
        element: <SignInPage />,
        title: "Sign In",
        path: "/signin",
        private: false,
        hidden: true,
    },
    {
        id: useId,
        element: <h1>Sign Up</h1>,
        title: "Sign Up",
        path: "/signup",
        private: false,
        hidden: true,
    },
]