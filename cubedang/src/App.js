import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/system";
import axios from "axios";

function App() {

  const getData1 = async () => {
    const headers = {
      authorization : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjUwMzU5Njk5OSIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNjg3MDY4NzUzLCJpYXQiOjE2NzE1MTY3NTMsIm5iZiI6MTY3MTUxNjc1Mywic2VydmljZV9pZCI6IjQzMDAxMTM5NyIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.LWKgjoF0JLz9qLr7OaqHfetKo2pB3LzhxzoPJrQegFI`
    }
    const params ={
      "count" : 100,
      "data" : "2022-12-18",
      "cursor" : ''
    }


    try {
      await axios.get(
        `?api/count=${params.count}&data=${params.data}&cursor=${params.cursor}`, {
          headers : headers
         }
       )
       .then((Response)=>{console.log(Response.data)})
      console.log("성공");
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
          <Button
            variant="contained"
            onClick={getData1}
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
