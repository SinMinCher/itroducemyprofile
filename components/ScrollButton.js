'use client';

const ScrollButton = ({ targetId, children }) => {
  const handleClick = () => {
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button onClick={handleClick} className="p-2 border rounded">
      {children}
    </button>
  );
};

export default ScrollButton;
