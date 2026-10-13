// Builds a CSV that opens correctly in Brazilian Excel (semicolon separator, UTF-8 BOM) and in Google Sheets.
export function toCsv(columns: string[], rows: string[][]): string {
  const cell = (v: string) => (/[";\r\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v);
  const lines = [columns, ...rows].map((r) => r.map(cell).join(";"));
  return "﻿" + lines.join("\r\n") + "\r\n";
}
