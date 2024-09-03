import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import ProductList from "./_components/ProductList";
import Banner from "./_components/Banner";

export default async function Home() {
	// const sliderList = await GlobalApi.getSlides()
	// const productList = await GlobalApi.getProducts()
	return (
		<div className="p-10 px-16">
			{/* <Slider sliderList={sliderList} />
			<ProductList productList={productList} />
			<Banner /> */}
		</div>
	);
}
