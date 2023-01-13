export const Cube = ({ data,idx }) => {
    return (
      <div style={{ paddingTop: "20px" }}key={idx}>
        <div>{data.name}</div>
        <div>{data.cnt}</div>
        <img src={data.img} style={{width:"50px"}}></img>
      </div>
    );
  };