import React from "react";
import { connect } from "react-redux";

const songDetail = ({ song }) => {
  //   console.log(props);

  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h1>{song.title}</h1>
      <h4>{song.artist}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(songDetail);
