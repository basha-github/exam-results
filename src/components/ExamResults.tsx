
import '../css/results.css'
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";



export default function ExamResults() {

 const contentRef = useRef<HTMLDivElement>(null);
const reactToPrintFn = useReactToPrint({ contentRef });


  return (
    <div>
        <div>
           <button onClick={reactToPrintFn} className='btn btn-warning'>Print</button>
        </div>
         
<div className="res-id" ref={contentRef}>
<div className="report-card" >
    <header>
      <h1>MADINA INTERNATIONAL SCHOOL</h1>
      <p>Affiliated to T. S. Board | Affiliation No. : 23190620217</p>
      <p>Ph.: 98450-98450, Email: madina-school@gmail.com</p>
    </header>

    <section className="academic-session">
      <h2>Academic Record</h2>
      <p>Academic Session - 2024-25</p>
       <img 
            width={200}
            height={200}
            src="https://www.shutterstock.com/image-photo/portrait-young-mixed-race-child-260nw-509909488.jpg" />
        
    </section>
    
    <section className="student-info">
      <div><label>Name of Student: </label> &nbsp;&nbsp;<span className="dotted"><b>Alur Basha</b></span></div>
      <div><label>Mother’s Name: </label>&nbsp;&nbsp; <span className="dotted"><b>Sharifa Bee</b></span></div>
      <div><label>Father’s Name:</label>&nbsp;&nbsp; <span className="dotted"><b>Abdul Rahman</b></span></div>
      <div><label>Roll No.:</label> &nbsp;&nbsp;<span className="dotted"><b>IV-23897</b></span></div>
      <div><label>Class Name:</label>&nbsp;&nbsp; <span className="dotted"><b>4th-Class</b></span></div>
      <div><label>Date of Birth:</label> &nbsp;&nbsp;<span className="dotted"><b>05-06-2016</b></span></div>
    </section>

    <table className="marks-table">
      <thead>
        <tr>
          <th rowSpan={2}>Subjects</th>
          <th colSpan={4}>Term I (100 Marks)</th>
          <th colSpan={4}>Term II (100 Marks)</th>
          <th rowSpan={2}>Grand Total</th>
          <th rowSpan={2}>Grade</th>
        </tr>
        <tr>
          <th>Oral</th><th>Half Yearly</th><th>Project</th><th>Total</th>
          <th>Oral</th><th>Yearly Exam</th><th>Project</th><th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>English</td>
        <td colSpan={1}>31</td>
        <td colSpan={1}>25</td>
        <td colSpan={1}>32</td>
        <td colSpan={1}>88</td>
        <td colSpan={1}>30</td>
        <td colSpan={1}>30</td>
        <td colSpan={1}>30</td>
        <td colSpan={1}>90</td>
        <td colSpan={1}>178</td>
        <td colSpan={1}>A+</td>
        </tr>
        
        <tr><td>Hindi</td>
        <td colSpan={1}>25</td>
        <td colSpan={1}>25</td>
        <td colSpan={1}>25</td>
        <td colSpan={1}>75</td>
        <td colSpan={1}>20</td>
        <td colSpan={1}>20</td>
        <td colSpan={1}>20</td>
        <td colSpan={1}>60</td>
        <td colSpan={1}>135</td>
        <td colSpan={1}>B+</td>
        </tr>
        <tr><td>Maths</td>
         <td colSpan={1}>28</td>
        <td colSpan={1}>22</td>
        <td colSpan={1}>30</td>
        <td colSpan={1}>80</td>
        <td colSpan={1}>30</td>
        <td colSpan={1}>30</td>
        <td colSpan={1}>20</td>
        <td colSpan={1}>80</td>
        <td colSpan={1}>160</td>
        <td colSpan={1}>A</td>
        </tr>
        <tr><td>EVS</td>
        <td colSpan={1}>31</td>
        <td colSpan={1}>29</td>
        <td colSpan={1}>30</td>
        <td colSpan={1}>90</td>
        <td colSpan={1}>32</td>
        <td colSpan={1}>30</td>
        <td colSpan={1}>33</td>
        <td colSpan={1}>95</td>
        <td colSpan={1}>185</td>
        <td colSpan={1}>A+</td>
        </tr>
        <tr><td>URDU</td>
        <td colSpan={1}>25</td>
        <td colSpan={1}>20</td>
        <td colSpan={1}>25</td>
        <td colSpan={1}>70</td>
        <td colSpan={1}>30</td>
        <td colSpan={1}>35</td>
        <td colSpan={1}>30</td>
        <td colSpan={1}>95</td>
        <td colSpan={1}>165</td>
        <td colSpan={1}>A</td>
        </tr>
      </tbody>
    </table>

    <section className="summary-boxes">
        
      <div className="overall">
        Over All Marks:823
        </div>
      <div className="percentage">Percentage: 87%</div>
      <div className="grade">Grade:A</div>
      <div className="rank">Rank :4th</div>
    </section>

    <section className="co-scholastic">
      <div className="column">
        <h3>CO-SCHOOLING AREA</h3>
        <ul>
          <li>Work Education</li>
          <li>Art Education</li>
          <li>Health Physical Education</li>
          <li>Social Skills</li>
          <li>Sports</li>
        </ul>
      </div>
      <div className="column discipline">
        <h3>DISCIPLINE</h3>
        <ul>
          <li>Regularity & Punctuality</li>
          <li>Sincerity</li>
          <li>Behaviour & Values</li>
          <li>Respectfulness for Rules & Reg</li>
          <li>Attitude Towards Teachers</li>
          <li>Attitude Towards Society</li>
        </ul>
      </div>
    </section>

    <section className="promotion">
      <p><strong>Congratulation! Promoted to className _______</strong></p>
    </section>

    <section className="grading-scale">
      <h3>Grading Scale for Scholastic Areas</h3>
      <table>
        <thead>
          <tr>
            <th>Marks Range</th>
            <th>91-100</th>
            <th>81-90</th>
            <th>71-80</th>
            <th>61-70</th>
            <th>51-60</th>
            <th>41-50</th>
            <th>32-40</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Grade</td>
            <td>A+</td><td>A</td><td>B+</td><td>B</td><td>C+</td><td>C</td><td>D</td>
          </tr>
        </tbody>
      </table>
    </section>

    <footer>
      <div className="signatures">
        <p>className Teacher’s Signature</p>
        <p>Principal’s Signature</p>
      </div>
    </footer>
  </div>



    </div>
    </div>
    
  )
}
