const Selector = ({ label, numbers, ...selectProps }) => {
  
  // const numbersList = [...Array(60).keys()]
  // const numbers = numbersList.map(number =>
    
  //   <option value={number} key={number}>{number}</option>)

  return (
    <label>
      <select 
        name="selectedTime"
        {...selectProps}>
        {numbers}
      </select>
      {label}
    </label>
  );
};

export default Selector;