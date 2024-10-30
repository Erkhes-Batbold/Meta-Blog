import { Blogs } from "@/components/blogs";
import { Carousels } from "@/components/carousels";
import { TrendCard } from "@/components/TrendCard";

export default function Home() {
  return (
    <main>
      <Carousels />
      <TrendCard />
      <Blogs />
    </main>
  );
}
