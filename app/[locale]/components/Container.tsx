interface ContainerTypes {
  children: React.ReactNode;
}

function Container({ children }: ContainerTypes) {
  return <div className="container mx-auto px-4">{children}</div>;
}

export default Container;
