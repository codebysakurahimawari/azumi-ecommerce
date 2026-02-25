interface ContactInfoItemProps {
  title: string;
  children: React.ReactNode;
}

export default function ContactInfoItem({
  title,
  children,
}: ContactInfoItemProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
      <div className="text-sm text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  );
}