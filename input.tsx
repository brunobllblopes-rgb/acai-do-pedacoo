export function Input(props) {
  return (
    <input
      {...props}
      className={`w-full p-2 rounded-xl border ${props.className}`}
    />
  );
}
