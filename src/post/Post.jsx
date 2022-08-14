import "./post.css"

export default function Post() {
  return (
    <div className="post">
       <img className="postImg"
       src="https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       />
       <div className="postInfo">
          <div className="postCats">
              <span className="postCat">Musıc</span>
              <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
          Lorem ipsum dolor sit amet
          </span>
          <hr/>
          <span className="postDate">1 hour ago</span>
       </div>
       <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nihil officiis deserunt voluptatibus ab impedit ipsa doloribus nobis libero? Minima eius, iusto pariatur reiciendis vero soluta neque tempora suscipit rem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat dolore veritatis quae delectus molestias ducimus provident architecto corporis, nostrum consequatur fugit, et, voluptas aperiam dolorem perferendis enim saepe vero!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias atque asperiores dolor. Quam nobis aspernatur doloremque quisquam minima dolorum sunt ab cupiditate minus id assumenda optio, maxime vitae esse sapiente.</p>
    </div>
  );
}
