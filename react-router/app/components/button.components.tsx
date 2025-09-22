export function Button({
    children, onClick
}: { 
    children: React.ReactNode, 
    onClick?: () => void, 
    // type: "button" | "submit" | "reset" 
}) {
  return (
    <button onClick={onClick} 
        type="button"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm"
    >
      {children}
    </button>
  );
}