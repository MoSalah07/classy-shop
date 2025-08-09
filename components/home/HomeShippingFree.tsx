import { TbTruckDelivery } from "react-icons/tb";

export default function HomeShippingFree() {
  return (
    <div className="px-16 mb-12 main-container hidden sm:block">
      <div className="w-full p-4 border-2 border-primary flex-col lg:flex-row flex-between gap-y-2 lg:gap-y-0 ">
        <div className="flex items-center gap-2">
          <TbTruckDelivery className="text-primary text-xl md:!text-[50px]" />
          <div className="ml-1 sm:ml-4 flex items-center">
            <p className="text-sm sm:text-base md:text-xl font-semibold uppercase">
              Free Shipping
            </p>
          </div>
        </div>
        <div>
          <p className="mb-0 text-sm sm:text-base font-medium">
            Free Delivery Now On Your First Order and over $200
          </p>
        </div>
        <p className="font-bold text-base sm:text-lg md:text-2xl">
          - Only $200*
        </p>
      </div>
    </div>
  );
}
