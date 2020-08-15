import React from "react";

const VideoDetail = ({ video }) => {
  let renderDeatil = null;
  if (video) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    renderDeatil = (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} title="videoPLayer" />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }

  return renderDeatil;
};

export default VideoDetail;
