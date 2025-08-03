import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

const intlMiddleware = createIntlMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
});

export async function middleware(req: NextRequest) {
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
