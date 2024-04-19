export default function ClearButton({ children, classes, ...props }) {
  let stylingClasses =
    'text-stone-700 text-lg me-3 px-7 py-2 rounded-md border border-stone-50 hover:shadow hover:border-stone-300';
  if (classes) {
    stylingClasses += ` ${classes}`;
  }

  return (
    <button type="button" className={stylingClasses} {...props}>
      {children}
    </button>
  );
}
