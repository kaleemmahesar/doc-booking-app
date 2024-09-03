import Header from "../_components/Header";
import { Outfit, Alexandria } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });
const almarai = Alexandria({ subsets: ["latin"] });

export default function LocaleLayout({ children, params: { locale } }) {
	
	return (
		<html lang={locale} dir={`${locale === 'en' ? 'ltr' : 'rtl'}`}>
			<body className={`${locale === 'ar' ? almarai.className : outfit.className}`}>
				<Header />
				{children}
			</body>
		</html>
	)
}