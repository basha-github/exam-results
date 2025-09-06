import { useNavigate } from "react-router-dom";
import "../css/school.css";

export default function ExamRollNo() {

    const exam = useNavigate();

    const results = (e:FormDataEvent)=>{
        e.preventDefault();
        exam("/results/"+1234);
    }
  return (
    <div>
        <form>
<div className="schoolpadding">
        <h1>Exam Results</h1>
        <input
          className="textHeight123"
          type="text"
          placeholder="ENTER ROLL NO"
          size={30}
          height={300}
          color="#ffff"
        />
        &nbsp;
        <button 
        onClick={()=>{results}}
        type="button" className="btn btn-primary">
          Submitt
        </button>
      </div>
        </form>
      
    </div>
  );
}
