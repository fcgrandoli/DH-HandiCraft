import image from "/hc.png";

export function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="http://localhost:3000/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={image} height="70px" width="80px" />
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="/">
          <span className="sub">HANDICRAFT</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Contenido</div>

      <li className="nav-item">
        <a className="nav-link collapsed" href="/products">
          <i className="fas fa-fw fa-folder"></i>
          <span>Productos</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/users">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Usuarios</span>
        </a>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
      
    </ul>
    
  );
}
