interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
  return (
    <div className="glass-card p-6 text-center fluent-hover">
      {icon && (
        <div className="flex justify-center mb-3">
          {icon}
        </div>
      )}
      <div className="text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatCard;
