/* eslint-disable-next-line */
export interface UiProps {
  to: string;
  primary?: boolean;
  children: React.ReactNode;
}

export function ButtonLink(props: UiProps) {
  return (
    <div className="inline-flex rounded-md shadow">
      <a
        href={props.to}
        className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
          props.primary
            ? 'text-white bg-indigo-600 hover:bg-indigo-700'
            : 'text-indigo-600 bg-white hover:bg-indigo-50'
        }`}
      >
        {props.children}
      </a>
    </div>
  );
}

export default ButtonLink;
