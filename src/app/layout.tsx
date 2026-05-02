import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<Record<string, string>>;
}) {
  const { locale } = await params;
  if (locale === "") {
    redirect("/en");
  }
  return <>{children}</>;
}
