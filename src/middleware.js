import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales: ["en", "ar", "ku"],
  defaultLocale: "en"
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|ku|en)/:path*"]
}
