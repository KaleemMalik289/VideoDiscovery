export function InfoBadge ({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-5 h-5 rounded-full bg-${color}-500 flex items-center justify-center`}>
        <div className={`w-2 h-2 rounded-full bg-${color}-500`}></div>
      </div>
      <span>{label}</span>
    </div>
  );
};