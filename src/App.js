import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import SignInSide from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Chatbot from "./components/Chatbot";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./navigation/Navigation";
import MyProfile from "./components/FormTest";
import MessageIn from "./components/MessageIn";
import DetailsSide from "./components/DetailsSide";
import DetailsTest from "./components/DetailTest";
import Chatb from "./components/Chatb";
import CollapsibleTable from "./components/Table";
import ChatbotPane from "./components/ChatbotPane";

// function App() {
//   const {pathname}=useLocation();
//   const showHeader =  pathname !== "/";
//   return (
//     // <div className="App">
//     //   <Router>
//     //     {showHeader ? (
//     //       <Routes>
//     //         <Route path="/" element={<SignInSide />} />
//     //       </Routes>
//     //     ) : (
//     //       <Routes>
//     //         <Route path="/chatbot" element={<DetailsSide />} />
//     //         <Route path="/det" element={<Chatb />} />
//     //         <Route path="/form" element={<MyProfile />} />
//     //         <Route path="/table" element={<CollapsibleTable />} />
//     //       </Routes>
//     //     )}
//     //   </Router>
//     // </div>
//     <div className="App">
//       <Router>
//         <>
//       {showHeader && <Header/>}
//         <div>
//           <Routes>
//             <Route path="/" element={<SignInSide />} />
//             <Route path="/chatbot" element={<DetailsSide />} />
//             <Route path="/det" element={<Chatb />} />
//             <Route path="/form" element={<MyProfile />} />
//             <Route path="/table" element={<CollapsibleTable/>} />
//           </Routes>
//         </div></>
//       </Router>
//       </div>
//   );
// }

// export default App;
const App = () => {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
};
const AppContent = () => {
  const { pathname } = useLocation();
  const showHeader = pathname !== "/";
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/chatbot" element={<DetailsSide />} />
        <Route path="/det" element={<Chatbot />} />
        <Route path="/form" element={<MyProfile />} />
        <Route path="/table" element={<CollapsibleTable />} />
        <Route path="/c" element={<ChatbotPane />} />

      </Routes>
    </>
  );
};
export default App;
