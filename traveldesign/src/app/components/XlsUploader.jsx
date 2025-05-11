"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

export default function XlsUploader() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setStatus("Leyendo archivo...");

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const allRows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const headers = allRows[1];
    const dataRows = allRows.slice(2);

    const rawRecords = dataRows.map((row) =>
      Object.fromEntries(headers.map((key, i) => [key, row[i]]))
    );

    const registros = rawRecords.filter((item) =>
      Object.values(item).some(
        (val) => val !== undefined && val !== null && val !== ""
      )
    );

    if (registros.length === 0) {
      setStatus("No se encontraron registros válidos para subir.");
      setLoading(false);
      return;
    }

    setStatus(
      `Se encontraron ${registros.length} registros válidos. Subiendo a Strapi...`
    );

    const token = `${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`;
    const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/experiences`;

    let success = 0;
    let fail = 0;

    for (const item of registros) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ data: item }),
        });

        if (res.ok) {
          success++;
        } else {
          fail++;
          console.error("Error en registro:", await res.text());
        }
      } catch (err) {
        fail++;
        console.error("Error general:", err);
      }
    }

    setStatus(
      `Carga completa. ✅ ${success} registros creados, ❌ ${fail} fallidos.`
    );
    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h2>Subir archivo XLS a Strapi</h2>
      <input
        type="file"
        accept=".xls,.xlsx"
        onChange={handleFileUpload}
        disabled={loading}
      />
      <p>{loading ? "Procesando..." : status}</p>
    </div>
  );
}
