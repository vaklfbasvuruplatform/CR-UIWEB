// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "72px", margin: 0 }}>404</h1>
        <p>Bu sayfa bulunamadı.</p>
        <Link href="/">Ana sayfaya dön</Link>
      </div>
    </main>
  );
}

