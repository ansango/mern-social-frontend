import "./NavBar.css";
export const NavBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Fakebook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          SearchIcon
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            PersonIcons
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            ChatIcon
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            NotificationsIcons
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};
