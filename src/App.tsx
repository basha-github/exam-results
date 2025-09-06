import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExamResults from "./components/ExamResults";
import ExamRollNo from "./components/ExamRollNo";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExamRollNo />} />
          <Route path="/results/:id" element={<ExamResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
