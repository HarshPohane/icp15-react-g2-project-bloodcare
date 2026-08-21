import "./Button.css";

function Button({
  children,
  onClick,
  disabled = false,
  href
}) {

  if (href) {
    return (
      <a
        href={href}
        className="common-button"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className="common-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;