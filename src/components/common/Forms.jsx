export const inputField = ({ input, meta, ...restProps }) => {
  return (
    <div className="flex gap-[5px] items-end">
      <input className="" {...input} {...restProps}></input>
      {meta.error && meta.touched && (
        <span className="text-red-500">{meta.error}</span>
      )}
    </div>
  );
};
