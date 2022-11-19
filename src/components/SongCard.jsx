import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';

const SongCardStyled = styled.div`
position: relative;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; */
  color: white;
  padding: 5px;
  background-color: #ecc8c842;
  border-radius: 5px;
  width: 45%;
  img {
    width: 100%;
  }
  .name,.singer {
    font-size: 12px;
    /* white-space: nowrap; */
  }
  .pause {
    position: absolute;
    top: 23%;
    left: 37%;
    /* display: none; */
    opacity: 0;
    transition: all .4s;
    cursor: pointer;
  }
  &:hover {
    .pause {
      /* display: block; */
      opacity: 1;
      transition: all .4s;
    }
  }
`;

const SongCard = (p) => {
  const dispatch = useDispatch();
  const { song: { images: { coverart }, title, subtitle } } = p;
  const { song, isPlaying, activeSong, i, data } = p;
  console.log(p);

  const hPauseClick = () => {
    dispatch(playPause(false));
  };
  const hPlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <SongCardStyled>
      <img src={coverart || ''} alt="" />
      <div className="name">{title}</div>
      <div className="singer">{subtitle}</div>
      <PlayPause
        className="pause"
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        data={data}
        hPauseClick={hPauseClick}
        hPlayClick={hPlayClick}
        i={i}
      />
    </SongCardStyled>
  );
};

export default SongCard;
