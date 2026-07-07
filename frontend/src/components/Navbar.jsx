const links = [
  { id: 'home', label: 'Dashboard' },
  { id: 'users', label: 'Users' },
  { id: 'products', label: 'Products' },
  { id: 'orders', label: 'Orders' },
];

function Navbar({ activeView, onNavigate }) {
  return (
    <nav className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">MERN Studio</p>
          <h1 className="text-xl font-semibold text-white">Admin dashboard</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onNavigate(link.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeView === link.id
                  ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
