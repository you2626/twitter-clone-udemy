import { Widgets } from '@mui/icons-material';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Timeline from "./components/timeline/Timeline";


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
