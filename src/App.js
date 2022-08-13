/** @jsxImportSource theme-ui */
import { Button, Typography } from "@mui/material";
import { useColorMode } from "theme-ui";

function App() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="App">
      <h1>Theme ui</h1>
      <button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "green" : "default");
        }}
      >
        Toggle {colorMode === "default" ? "green 🧛‍♀️" : "Light 🌞"}
      </button>
      {/* <Typography>help</Typography> */}
    </div>
  );
}

export default App;
