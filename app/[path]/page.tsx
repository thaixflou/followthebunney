import { notFound } from "next/navigation";
import { PATHS } from "@/lib/paths";
import Audit from "../Audit";

// One static page per built path, so the landing page can link straight to an audit: /outbound, /agency, /airbnb-br.
export const dynamicParams = false;

export function generateStaticParams() {
  return PATHS.map((p) => ({ path: p.id }));
}

export default async function PathPage({ params }: PageProps<"/[path]">) {
  const { path } = await params;
  if (!PATHS.some((p) => p.id === path)) notFound();
  return <Audit initialPath={path} />;
}
