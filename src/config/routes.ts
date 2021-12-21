import Chat from "../screens/Chat";
import Chats from "../screens/Chats";
import Home from "../screens/Home";
import Login from "../screens/Login";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "",
    component: Home,
    name: "Home Screen",
    protected: false,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: "/chats",
    component: Chats,
    name: "Chats Screen",
    protected: true,
  },
  {
    path: "/chat/:chatId",
    component: Chat,
    name: "Chat Screen",
    protected: true,
  },
];

export default routes;
