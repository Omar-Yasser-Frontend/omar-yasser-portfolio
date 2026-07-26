import Container from './Container';

interface SectionType {
  children: React.ReactNode;
}

function Section({ children }: SectionType) {
  return (
    <section className="border-border border-t py-10 lg:py-20">
      {children}
    </section>
  );
}

export default Section;

Section.Container = Container;

Section.HeadingWrapper = function HeadingWrapper({ children }: SectionType) {
  return (
    <hgroup className="flex flex-col gap-6 text-center mb-10">{children}</hgroup>
  );
};

Section.Heading = function Heading({ children }: SectionType) {
  return (
    <h2 className="text-accent before relative mx-auto w-fit text-3xl">
      {children}
      <span className="absolute -bottom-3 left-1/2 h-1 w-3/4 -translate-x-1/2 bg-white">
        <span className="absolute top-1/2 left-1/2 aspect-square w-4 -translate-1/2 rounded-full bg-white">
          <span className="bg-bg absolute top-1/2 left-1/2 aspect-square w-2.5 -translate-1/2 rounded-full"></span>
        </span>
      </span>
    </h2>
  );
};

Section.SubHeading = function SubHeading({ children }: SectionType) {
  return <p>{children}</p>;
};
