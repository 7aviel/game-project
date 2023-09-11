interface buttonProps {
  children: string;
  color?: string;
  onClickEvent?: (any?: any) => void;
}

export default function Button({
  color = "primary",
  children,
  onClickEvent,
}: buttonProps) {
  return (
    <>
      <div className="container">
        <button className={`btn btn-${color}`} onClick={onClickEvent}>
          {children}
        </button>
      </div>
    </>
  );
}
