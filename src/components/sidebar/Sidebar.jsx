import "./sidebar.css"

export default function Sidebar() {
  return (
    <div clasName="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
             <img className="sidebarImg" src="https://images.pexels.com/photos/5840452/pexels-photo-5840452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid nulla explicabo repudiandae molestiae, voluptas nisi corporis debitis quos accusantium quaerat natus possimus minus. Dolorum error ipsam dicta laborum cupiditate consequuntur!
            
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListTitle">Life</li>
                <li className="sidebarListTitle">Music</li>
                <li className="sidebarListTitle">Style</li>
                <li className="sidebarListTitle">Sport</li>
                <li className="sidebarListTitle">Cinema</li>
                <li className="sidebarListTitle">Tech</li>
            </ul>
            
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                 <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                 <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                 <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                 <i className="sidebarIcon fa-brands fa-pinterest"></i>
            </div>
        </div>
    </div> 
  );
}
