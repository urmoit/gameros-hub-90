import StatCard from "@/components/ui/StatCard";

const stats = [
  { value: "9", label: "Releases" },
  { value: "0", label: "Open Issues" },
  { value: "100%", label: "Issues Resolved" },
  { value: "2025", label: "Project Started" },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Project Statistics
          </h2>
          <p className="text-lg text-muted-foreground">
            Tracking our progress and commitment to quality
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
