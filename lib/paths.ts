import { airbnbBr } from "../content/airbnb-br.ts";
import type { AuditPath } from "./types.ts";

// Paths that are built. The other three profiles are listed on the home page as "coming soon".
export const PATHS: AuditPath[] = [airbnbBr];

export const PROFILES = [
  { id: "property-us", label: "Property management (US)", hint: "Real estate and rental management firms", ready: false },
  { id: "airbnb-br", label: "Gestor de Airbnb (Brasil)", hint: "Prédios e hóspedes", ready: true },
  { id: "software", label: "Software and high-end services", hint: "Outbound engine for B2B companies", ready: false },
  { id: "agency", label: "Founder-led marketing agency", hint: "Inbound that is not being worked", ready: false },
];
