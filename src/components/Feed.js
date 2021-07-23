import { Posts } from "../data";

import "./Feed.css";
import { Post } from "./Post";
import { Share } from "./Share";

export const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};
