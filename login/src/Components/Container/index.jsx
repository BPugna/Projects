const Container = (props) => {
  const { className = props.className, children = props.children } = props;
  return <div className={className}>{children}</div>;
};

export default Container;
