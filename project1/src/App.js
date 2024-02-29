import {Routes, Route} from "react-router-dom";
import BasicLayout from "./component/layout/BasicLayout";
import MainPage from "./component/main/MainPage";
import MemberLayout from "./component/layout/MemberLayout";
import MemberRegister from "./component/member/MemberRegister";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<MainPage />}></Route>
        </Route>
        <Route path="/member" element={<MemberLayout />}>
          <Route index element={<MemberRegister />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;