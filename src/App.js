import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Page from "./Page/Page";

import "./app.css"

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="Page">
          <Page />
        </div>
      </div>
    </div>
  );
}

export default App;
