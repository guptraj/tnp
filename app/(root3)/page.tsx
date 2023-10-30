import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Section1 from "@/components/shared/Section1";
import Section2 from "@/components/shared/Section2";
import Section3 from "@/components/shared/Section3";

async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}

export default Home;
