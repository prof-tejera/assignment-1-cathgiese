const DisplayTime = ({ active, minutes, seconds, milliseconds }) => {
    return (
      <div
        style={{
          border: "1px solid black",
          width: 300,
          height: 70,
          textAlign: "right",
          marginBottom: 10,
          background: "white",
          fontSize: "20px",
          paddingTop: "40px",
          paddingRight: "15px",
        }}
      >
        {minutes}m 
        {seconds}s 
        {milliseconds}
      </div>
    );
  };
  
  export default DisplayTime;
  