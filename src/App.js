import './App.css';
import SideBar from './components/sidebar/SideBar';
import Timeline from "./components/timeline/Timeline";
import Widgets from './components/widget/Widgets';


function App() {
  return (
    <div className="app">
      {/* {Sidebarを作成} */}
      <SideBar />

      {/* Timeline */}
      <Timeline />

      {/* Widget */}
      <Widgets />
      
    </div>
  );
}

export default App;
