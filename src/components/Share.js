import "./Share.css";

export const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              PermMedia
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              Label
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              Room
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              EmojiEmotions
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};
