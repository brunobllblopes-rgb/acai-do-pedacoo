export function Button({ children, onClick, className, variant }) {
  return (
    <button onClick={onClick} className={`px-3 py-2 rounded-xl ${className}`}>
      {children}
    </button>
  );
}
