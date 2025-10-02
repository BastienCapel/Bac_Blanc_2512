import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../features/home/pages/HomePage"));
const ExamDashboardPage = lazy(
  () => import("../features/exam-dashboard/pages/ExamDashboardPage"),
);
const MathematicsExam20260213Page = lazy(
  () => import("../features/math-exam-dashboard/pages/MathematicsExam20260213Page"),
);
const MathematicsExam20260523Page = lazy(
  () => import("../features/math-exam-dashboard/pages/MathematicsExam20260523Page"),
);
const BacBlancEAF20260407Page = lazy(
  () => import("../features/math-exam-dashboard/pages/BacBlancEAF20260407Page"),
);

export default function App() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-slate-500">Chargement…</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/examens-blancs" element={<ExamDashboardPage />} />
        <Route
          path="/examens-blancs/mathematiques-2026-02-13"
          element={<MathematicsExam20260213Page />}
        />
        <Route
          path="/examens-blancs/mathematiques-2026-05-23"
          element={<MathematicsExam20260523Page />}
        />
        <Route
          path="/examens-blancs/eaf-2026-04-07"
          element={<BacBlancEAF20260407Page />}
        />
      </Routes>
    </Suspense>
  );
}
