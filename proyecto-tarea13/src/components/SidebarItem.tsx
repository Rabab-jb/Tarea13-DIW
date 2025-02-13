interface SidebarItemProps {
    icon: string;
    text: string;
    active?: boolean;
  }
  
  function SidebarItem({ icon, text, active }: SidebarItemProps) {
    return (
      <li className={`list-group-item list-group-item-action d-flex align-items-center ${active ? "active" : ""}`}>
        <i className={`bi ${icon} me-2`}></i>
        {text}
      </li>
    );
  }
  
  export default SidebarItem;
  