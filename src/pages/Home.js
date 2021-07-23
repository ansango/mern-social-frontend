import { Feed, NavBar, RightBar, SideBar } from "../components";

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
