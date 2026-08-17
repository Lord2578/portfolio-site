// Falls back to the Vercel-assigned deployment URL until a custom domain
// (NEXT_PUBLIC_SITE_URL) is set — see portfolio_website_project memory.
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
