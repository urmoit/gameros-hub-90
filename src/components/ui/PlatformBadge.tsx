import { LucideIcon } from "lucide-react";

interface PlatformBadgeProps {
  icon: LucideIcon;
  name: string;
  description: string;
}

const PlatformBadge = ({ icon: Icon, name, description }: PlatformBadgeProps) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default PlatformBadge;
