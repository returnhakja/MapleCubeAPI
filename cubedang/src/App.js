import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/system";

const handelClick = () => {
  alert("바보들");
};
function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
          <Button
            variant="contained"
            onClick={handelClick}
            style={{ marginTop: "150px" }}
          >
            이거 눌려봐
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
