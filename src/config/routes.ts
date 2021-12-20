import Home from "../screens/Home";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: true;
}

const routes: RouteType[] = [
  {
    path: "",
    component: Home,
    name: "Home Page",
    protected: true,
  },
];

export default routes;
