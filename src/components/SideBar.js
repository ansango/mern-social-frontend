import { Users } from "../data";
import { CloseFriend } from "./CloseFriend";
import "./SideBar.css"
export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            RssFeedIcon
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            ChatIcon 
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            PlayCircleFilledOutlinedIcon
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            Group 
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            Bookmark
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            HelpOutline
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            WorkOutline
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            Event
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            School
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};
