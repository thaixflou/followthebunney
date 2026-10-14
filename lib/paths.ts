import { airbnbBr } from "../content/airbnb-br.ts";
import { agency } from "../content/agency.ts";
import { outbound } from "../content/outbound.ts";
import type { AuditPath } from "./types.ts";

// Paths that are built. The other profiles are listed on the home page as "coming soon".
export const PATHS: AuditPath[] = [airbnbBr, agency, outbound];

export const PROFILES = [
  { id: "property-us", label: "Property management (US)", hint: "Real estate and rental management firms", ready: false },
  { id: "airbnb-br", label: "Gestor de Airbnb (Brasil)", hint: "Prédios e hóspedes", ready: true },
  { id: "outbound", label: "Reach new clients", hint: "Outbound for founders who rely on referrals and inbound", ready: true },
  { id: "agency", label: "Founder-led marketing agency", hint: "Inbound that is not being worked", ready: true },
];
