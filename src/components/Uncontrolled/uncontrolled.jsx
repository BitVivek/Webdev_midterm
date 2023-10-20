import { useRef } from "react";
import "./uncontrolled.css";
export default function Uncontrolled() {
  const emailRef = useRef(null);
  const porfolioRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const positionSelectRef = useRef(null);
  const descriptionRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert("Form Submitted!");
    console.log("Input value:", firstNameRef.current.value);
    console.log("Select value:", lastNameRef.current.value);
    console.log("Checkbox value:", porfolioRef.current.checked);
  }
  function handleReset(event) {
    event.preventDefault();
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    porfolioRef.current.value = "";
    positionSelectRef.current.selectedIndex = 0;
    descriptionRef.current.value = "";

    const radioButtons = document.getElementsByName("relocate");
    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }
  }
  return (
    <form className="uncontrolled" onSubmit={handleSubmit}>
      <label>
        <div className="names">
          <div>
                    <p>First Name*:</p>
                    <input ref={firstNameRef} type="text" required />   
          </div>
          <div>
            <p>Last Name*:</p>
                    <input ref={lastNameRef} type="text" required />   
          </div>
        </div>
      </label>
      <label>
        <p>Email:</p>
        <input ref={emailRef} type="email" required></input>   
      </label>
       
      <label className="portfoliowebsite">
        Portfolio website      
        <input type="url" ref={porfolioRef} />   
      </label>
      <label className="positionselect">
        Position you are applying for *      
        <select type="url" ref={positionSelectRef}>
          <option>Security Analyst</option>
          <option>Tester</option>
          <option>Software Engineer</option>
          <option>Front End Developer</option>
        </select>
      </label>
      <label className="phone">
        Phone * (Must be 10 digits)      
        <input type="number" ref={porfolioRef} step={false} />   
      </label>
      <label>
        Are you wiling to relocate?
        <div>
          <input type="radio" value="yes" name="relocate" />
          Yes
          <input type="radio" value="no" name="relocate" />
          No
          <input type="radio" value="not sure" name="relocate" />
          Not sure
        </div>
      </label>
      <label>
        Reference/Comments/Questions
        <input type="text" ref={descriptionRef} className="textbox" />
      </label>
      <button className="uncontrolled__button" type="submit">
        Submit    
      </button>
      <button className="uncontrolled__button" onClick={handleReset}>
        Reset    
      </button>
    </form>
  );
}
