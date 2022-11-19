import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, hPauseClick, hPlayClick, className }) => (isPlaying && activeSong?.title === song.title ? <FaPauseCircle size={35} className={`text-gray-300 ${className}`} onClick={hPauseClick} /> : <FaPlayCircle size={35} className={`text-gray-300 ${className}`} onClick={hPlayClick} />);

export default PlayPause;
