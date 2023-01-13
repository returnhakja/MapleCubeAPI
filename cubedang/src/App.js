import moment from "moment/moment";
import { useEffect, useState } from "react";
import "./App.css";
import getDatesStartToLast from "./getDatesStartToLast";
import { nexonAPI } from "./nexonAPI";
import { Box, Container } from "@mui/system";
import { Cube } from "./Cube";
import redcube from './CubeImg/red_cube.png'
import black from './CubeImg/black_cube.png'
import additional from './CubeImg/additional_cube.png'
import master from './CubeImg/master_cube.png'
import meister from './CubeImg/meister_cube.png'
import occult from './CubeImg/occult_cube.png'
function App() {
  const [data, setdata] = useState([]);
  const [years, setYear] = useState();
  const [cube, setCube] = useState([]);
  const [key, setkey] = useState();

  useEffect(() => {
    const startDate = moment("2022-11-25");
    const lastDate = moment().subtract(1, "days").format("YYYY-MM-DD");
    getDatesStartToLast(startDate, lastDate, setYear);
    
  }, []);

  const handleChange = (e) => {
    setkey({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name)
    console.log(e.target.value)
  };

  const getApi = () => {
    nexonAPI(1000, years, key).then((res) => {
      setdata(res);
    });
  };
  const getData = () => {
    let y = [
      { name: "레드 큐브", cnt: 0, img:redcube},
      { name: "블랙 큐브", cnt: 0, img:black},
      { name: "장인의 큐브", cnt: 0,img:master },
      { name: "명장의 큐브", cnt: 0, img:meister },
      { name: "에디셔널 큐브", cnt: 0 , img :additional},
      { name: "수상한 큐브", cnt: 0, img: occult},
    ];
    data.map((ele) => {
      const testData = ele.cube_histories;
      testData.filter((tmp) => {
        y.map((cube, idx) => {
          if (cube.name === tmp.cube_type) {
            cube.cnt++;
            return;
          }
        });
      });
      setCube(y);
      console.log(y);
    });
  };
  return (
    <div className="contain">
       <Container maxWidth="sm">
       <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
      <div className="header">
        <input onChange={handleChange} name="key"/>
        <button onClick={() => getApi()}>버튼</button>
        <button onClick={() => getData()}>확인</button>
      </div>
      <div className="body"></div>
      <div className="footer">푸터</div>
      {cube.map((cube, idx) => {
        return <Cube data={cube} idx={idx} />;
      })}
      </Box>
      </Container>
    </div>
  );
}

export default App;