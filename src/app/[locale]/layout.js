import Header from "../_components/Header";
import { Open_Sans, Alexandria } from "next/font/google";

const nunito = Open_Sans({ subsets: ["latin"] });
const almarai = Alexandria({ subsets: ["latin"] });

export default function LocaleLayout({ children, params: { locale } }) {
	
	return (
		<html lang={locale} dir={`${locale === 'en' ? 'ltr' : 'rtl'}`}>
			<body className={`${locale === 'ar' ? almarai.className : nunito.className}`}>
				<Header  locale={locale} />
				{children}
			</body>
		</html>
	)
}