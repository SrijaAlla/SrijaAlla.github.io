function Timeline() {
  const years = [2015, 2022, 2023, 2024];
  return (
    <div>
      <div className="timeline">
        {years.map((year) => (
          <div key={year} className="timeline-year">
            {year}
          </div>
        ))}
      </div>
      <div className="timeline-line" />
    </div>
  );
}
export default Timeline;
