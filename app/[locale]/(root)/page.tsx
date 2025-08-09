import AdsBannerSlider from "@/components/AdsBannerSlider";
import BlogsSlider from "@/components/blogs/BlogsSlider";
import DiscountPopup from "@/components/home/DiscountPopup";
import HomeCategorySlider from "@/components/home/HomeCategorySlider";
import HomeSectionPopularProducts from "@/components/home/HomeSectionPopularProducts";
import HomeSectionWrapper from "@/components/home/HomeSectionWrapper";
import HomeShippingFree from "@/components/home/HomeShippingFree";
import HomeSlider from "@/components/home/HomeSlider";
import ProductsSlider from "@/components/shared/ProductsSlider";
import { IMAGES_ADDS_BANNER } from "@/constant/data";

export default async function Home() {
  return (
    <div className="pt-6">
      <div className="overflow-x-hidden">
        <HomeSlider />
      </div>
      <HomeCategorySlider />
      <section className=" py-4 bg-white">
        <div className="main-container w-full h-full">
          <HomeSectionPopularProducts />
          <ProductsSlider items={8} />
        </div>
      </section>

      {/* Fress Shipping Ads */}
      <section className="bg-white py-6 sm:py-16">
        <HomeShippingFree />
        <AdsBannerSlider items={IMAGES_ADDS_BANNER} />
      </section>
      <HomeSectionWrapper title="Latest Products">
        <ProductsSlider items={6} />
        <AdsBannerSlider items={IMAGES_ADDS_BANNER} />
      </HomeSectionWrapper>

      <HomeSectionWrapper title="Latest Products" bg="bg-white">
        <ProductsSlider items={6} />
        <AdsBannerSlider items={IMAGES_ADDS_BANNER} />
      </HomeSectionWrapper>

      <HomeSectionWrapper title="Latest Products">
        <ProductsSlider items={6} />
        <AdsBannerSlider items={IMAGES_ADDS_BANNER} />
      </HomeSectionWrapper>

      <HomeSectionWrapper title="From The Blog" bg="bg-white">
        <BlogsSlider />
        {/* <AdsBannerSlider items={IMAGES_ADDS_BANNER} /> */}
      </HomeSectionWrapper>

      <DiscountPopup />
    </div>
  );
}
