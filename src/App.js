import { Parallax } from "react-parallax";
import img01 from "./images/img01.jpg";
import img02 from "./images/img02.jpg";
import img03 from "./images/img03.jpg";

function App() {
  return (
    <div className="App">
      
      
      <Parallax strength={-200} blur={{ min: 0.5, max: 1 }} bgImage={img01}>
        <div className="content">
          <div className="text-content"><img id="img" src={img01} alt="" /></div>
        </div>
      </Parallax>

      <Parallax strength={-300} blur={{ min: 0.5, max: 1 }} bgImage={img02}>
        <div className="content">
          <div className="text-content"><img id="img" src={img02} alt="" /></div>
        </div>
      </Parallax>

      <Parallax strength={-400} blur={{ min: 0.5, max: 1 }} bgImage={img03}>
        <div className="content">
          <div className="text-content"><img id="img" src={img03} alt="" /></div>
        </div>
      </Parallax>

      
    </div>
  );
}

export default App;