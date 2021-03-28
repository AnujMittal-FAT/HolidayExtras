import React from "react";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const FlickrPhotoStream = React.lazy(() =>
  import("../pages/FlickrPhotoStream")
);

const routes = [
  { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
  {
    path: "/FlickrPhotoStream",
    exact: true,
    name: "FlickrPhotoStream",
    component: FlickrPhotoStream,
  },
];

export default routes;
