export default function CompanyDate({
  company,
  date,
}: {
  company: string;
  date: string;
}) {
  return (
    <div className="flex justify-between">
      <div>{company}</div>
      <div className="text-gray-500">{date}</div>
    </div>
  );
}
