interface MetaBadgeProps {
  icon: string;
  text: string;
}

export default function MetaBadge({ icon, text }: MetaBadgeProps) {
  return (
    <span className="text-[12px] text-[rgba(255,255,255,0.35)] flex items-center gap-1.5">
      <span>{icon}</span>
      <span>{text}</span>
    </span>
  );
}
