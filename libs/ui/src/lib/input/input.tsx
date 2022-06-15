export interface InputProps {
  label?: string;
}

export function Input(props: InputProps) {
  return (
    <div>
      <label className="text-red-400">{props.label}</label>
      <input
        type="text"
        defaultValue={''}
        className="border border-gray-300 shadow-gray-400 rounded-md"
      />
    </div>
  );
}

export default Input;
