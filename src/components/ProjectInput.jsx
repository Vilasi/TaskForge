export default function ProjectInput({
  id,
  type,
  inputRef,
  children,
  ...props
}) {
  const stylingClasses = {
    input:
      'bg-stone-200 text-stone-800 rounded-sm text-lg p-2 shadow-md border border-stone-300 mb-5',
    label: 'uppercase font-semibold text-lg text-stone-700 mb-1',
  };

  let input = (
    <input
      ref={inputRef}
      id={id}
      type={type}
      className={stylingClasses.input}
    />
  );

  if (type === 'textarea') {
    input = (
      <textarea ref={inputRef} id={id} className={stylingClasses.input} />
    );
  }

  return (
    <>
      <label className={stylingClasses.label} htmlFor={id}>
        {children}
      </label>
      {input}
    </>
  );
}
