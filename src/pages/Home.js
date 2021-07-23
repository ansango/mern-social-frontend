import { Feed, NavBar, RightBar, SideBar } from "../components";
import "./Home.css"
export const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};
