import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
           <i className="topIcon fa-brands fa-square-facebook"></i>
           <i className="topIcon fa-brands fa-square-twitter"></i>
           <i className="topIcon fa-brands fa-square-instagram"></i>
           <i className="topIcon fa-brands fa-pinterest"></i>

        </div>
          
        <div className="topCenter">
          <ul className="topList">
            <li class="topListItem">HOME</li>
            <li class="topListItem">ABOUT</li>
            <li class="topListItem">CONTACT</li>
            <li class="topListItem">WRITE</li>
            <li class="topListItem">LOGOUT</li>
          </ul>
        </div>

        <div className="topRight">
           <img
             className="topImg"
             src="https://images.pexels.com/photos/4611910/pexels-photo-4611910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             
           />
           <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}
