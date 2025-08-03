import DiscountPopup from "@/components/home/DiscountPopup";
import HomeCategorySlider from "@/components/home/HomeCategorySlider";
import HomeSlider from "@/components/home/HomeSlider";

export default async function Home() {
  return (
    <div className="main-container py-4 ">
      <div className="overflow-x-hidden">
        <HomeSlider />
      </div>
      <HomeCategorySlider />
      <DiscountPopup />
    </div>
  );
}
