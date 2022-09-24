import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
       <span className="sidebarTitle">ABOUT US</span>
            

       <p>We made this space to help each other through our daily life aspects, by sharing experiences and different ressources, on every field you wish. 

       </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
<li className="sidebarListItem"> Life</li>
<li className="sidebarListItem">Music</li>
<li className="sidebarListItem">Sport</li>
<li className="sidebarListItem">Cooking</li>
<li className="sidebarListItem">Tech</li>
      </ul>
      </div>
    </div>
  );
}
