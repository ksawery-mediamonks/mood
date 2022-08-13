import Mood1 from "../svgr/mood1.svg";
import Mood2 from "../svgr/mood2.svg";
import Mood3 from "../svgr/mood3.svg";
import Mood4 from "../svgr/mood4.svg";
import Mood5 from "../svgr/mood5.svg";
import Mood6 from "../svgr/mood6.svg";
import Mood7 from "../svgr/mood7.svg";

const Icon = (props) => {
  if (props.index === 0) {
    return (
      <div>
        <Mood1 />
      </div>
    );
  } else if (props.index === 1) {
    return (
      <div>
        <Mood2 />
      </div>
    );
  } else if (props.index === 2) {
    return (
      <div>
        <Mood3 />
      </div>
    );
  } else if (props.index === 3) {
    return (
      <div>
        <Mood4 />
      </div>
    );
  } else if (props.index === 4) {
    return (
      <div>
        <Mood5 />
      </div>
    );
  } else if (props.index === 5) {
    return (
      <div>
        <Mood6 />
      </div>
    );
  } else if (props.index === 6) {
    return (
      <div>
        <Mood7 />
      </div>
    );
  }
};

export default Icon;
