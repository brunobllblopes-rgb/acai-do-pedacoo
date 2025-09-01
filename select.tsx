import { useId } from "react";
export function Select({ children, onValueChange }) {
  const id = useId();
  return (
    <select id={id} onChange={(e) => onValueChange(e.target.value)}>
      {children}
    </select>
  );
}
export function SelectTrigger({ children, className }) {
  return <div className={className}>{children}</div>;
}
export function SelectValue({ placeholder }) {
  return <option value="">{placeholder}</option>;
}
export function SelectContent({ children }) {
  return <>{children}</>;
}
export function SelectItem({ children, value }) {
  return <option value={value}>{children}</option>;
}
