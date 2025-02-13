import SidebarItem from "./SidebarItem";

const menuItems = [
  { icon: "bi-house", text: "Inicio" },
  { icon: "bi-search", text: "Buscar" },
  { icon: "bi-compass", text: "Explorar" },
  { icon: "bi-camera-reels", text: "Reels" },
  { icon: "bi-envelope", text: "Mensajes" },
  { icon: "bi-bell", text: "Notificaciones" },
  { icon: "bi-plus-square", text: "Crear" },
  { icon: "bi-columns", text: "Panel" },
  { icon: "bi-person", text: "Perfil" },
];

function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ width: "250px", height: "100vh", position: "fixed" }}>
      <h2 className="mb-3">Instagram</h2>
      <ul className="list-group">
        {menuItems.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </ul>
      <hr />
      <ul className="list-group">
        <SidebarItem icon="bi-arrow-repeat" text="Threads" />
        <SidebarItem icon="bi-list" text="Más" />
      </ul>
    </div>
  );
}

export default Sidebar;

