interface InputComponentProps {
  hourlyResult: number | undefined;
}

export function ResultComponent({ hourlyResult }: InputComponentProps) {
  return <p>HourlyResult: {hourlyResult}</p>;
}
