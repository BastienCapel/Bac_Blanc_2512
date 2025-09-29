export default function Header() {
  return (
    <header className="space-y-4">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-4">
          <img
            alt="Logo du Lycée Franco-Japonais de Paris"
            className="h-16 w-16 flex-shrink-0 rounded-full border border-slate-200 bg-white object-cover shadow-sm"
            src="https://i.imgur.com/0YmGlXO.png"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Lycée Franco-Japonais de Paris
            </p>
            <h1 className="text-3xl font-bold text-slate-900">
              Examens blancs LFJP 2025-2026
            </h1>
          </div>
        </div>
      </div>
      <p className="text-lg text-slate-600">10, 11 et 12 Décembre 2025</p>
    </header>
  );
}
