const MovieInfo = ({movieobj}) => {
    return (
    <div>
      <h4>{movieobj.title}</h4>
      <div>
        <div>
          <span>Running Time</span>
          <span>{movieobj.runningTime}</span>
        </div>
      </div>
      <div>
        <div>
          <span>Genre</span>
          <span>{movieobj.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
