import PageTransition from "../components/PageTransition";
import Title from "../components/Title";

export default function About({ bg }: { bg: string }) {
  return (
    <PageTransition bg={bg}>
      <main className="max-w-6xl mx-auto pb-12">
        <div className="h-screen flex items-center">
          <Title>About Us</Title>
        </div>
      </main>
    </PageTransition>
  );
}
