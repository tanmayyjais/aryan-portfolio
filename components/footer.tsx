export function Footer() {
  return (
    <footer className="border-t border-[#ece9e2]/8 py-8 bg-black">
      <div className="container-shell flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-[#ece9e2]/35 md:flex-row md:items-center md:justify-between font-mono">
        <p>Aryan Kumar / DRISHTIIKAAR</p>
        <p>© {new Date().getFullYear()} • Student of Cinema</p>
      </div>
    </footer>
  );
}
