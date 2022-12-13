import { useDispatch } from "react-redux";
import Page from "./components/page"
import PlayList from "./components/playList";
import { fetch } from "./redux/slice/playListSlice";

function App() {
  const dispatch = useDispatch()
dispatch(fetch())
  return (
    <div className="App">
  <Page/>
  {/* <PlayList/> */}
    </div>
  );
}

export default App;
