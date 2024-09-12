import "./globals.css";


export const metadata = {
	title: "Hannah Healthcare",
	description: "Book the best doctors online",
};

export default async function RootLayout({ children, params }) {
	// const t = await getDictionary(lang);	
	return (
		<html lang={params.lang}>
			<body>
				{children}
			</body>
		</html>
	);
}
