export default ({ classes, children }) => {
  return (
    <div
      className={`card p-8 md:px-16 border rounded-lg border-[#29385d] mx-auto ${classes}`}
    >
      <div className="card-glitter"></div>
      {children}
    </div>
  );
};
