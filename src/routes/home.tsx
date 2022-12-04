import { Outlet } from "react-router-dom";
import Background from "../components/Background";
import HomeContent from "../components/HomeContent";

function Home() {
  return (
    <>
      <Background />
      <HomeContent />
      <Outlet />
    </>
  );
}
export default Home;
