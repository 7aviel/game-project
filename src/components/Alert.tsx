interface alertProps {
  color?: string;
  children: string;
  onClose: () => void;
}

const Alert = ({ onClose, children, color = "warning" }: alertProps) => {
  return (
    <>
      <div className={"alert alert-" + color + " alert-dismissible"}>
        {children}
        <button
          onClick={onClose}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;
