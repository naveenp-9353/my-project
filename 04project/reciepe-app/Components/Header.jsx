function Header(){
  return(
      <header className="main_header">
      <div>
        <h1 className="header-title">
          Look for <span>Favorite</span> Food
        </h1>
        <p className="header-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sequi laboriosam numquam nobis perspiciatis officiis beatae laborum officia ab, enim accusantium dolores delectus placeat, facere magnam. Fugiat, incidunt. Tempora, obcaecati.
        </p>
        <div className="header-input-container">
          <input type="text" placeholder='Find a recipe...'/>
          <button>Search</button>
        </div>
      </div>
      <img src="https://hips.hearstapps.com/hmg-prod/images/how-to-make-french-toast-1589827448.jpg?crop=0.734xw:0.490xh;0.0897xw,0.323xh&resize=1200:*"alt=""className="main_img"/>
      </header>
  );
}

export default Header;