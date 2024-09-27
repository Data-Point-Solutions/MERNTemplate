/** @type {import("react-router").RouteObject} */

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// lazy loading
const Home = React.lazy(() => import("../pages/home/home"));
const NotFound = React.lazy(() => import("../pages/notFound/NotFound"));
const OriginalApp = React.lazy(() => import("../pages/originalApp/originalApp"));

/**
 * The main router for the app.
 * 
 * This component renders the main routes of the app, and uses React's
 * built-in Suspense component to handle lazy loading of the route
 * components.
 * 
 * @returns {JSX.Element} The AppRouter component.
 */
const AppRouter: React.FC = () => {
    console.log("Rendering AppRouter");
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* The home route. */}
                <Route path="/" element={<OriginalApp />} />
                <Route path="/home" element={<Home />} />
                {/* The catch-all route. * is a wildcard that matches any path. */}
                <Route path="*" element={<NotFound />} />
                {/* Add additional routes here */}
            </Routes>
        </Suspense>
    )
};
export default AppRouter