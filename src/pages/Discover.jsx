import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { genres } from '../assets/constants.js';
import { useGetTopChartsQuery } from '../redux/services/shazamCore.js';
import SongCard from '../components/SongCard';
import Error from '../components/Error.jsx';
import Loader from '../components/Loader.jsx';

const Discover = () => {
  const dispatch = useDispatch();
  const { isActive, isPlaying, activeSong } = useSelector((v) => v.player);
  const [checkedTab, setCheckedTab] = useState('Pop');
  const { data, error, isFetching } = useGetTopChartsQuery();
  console.log('isFetching', isFetching);
  if (isFetching) return (<Loader />);
  if (error) return (<Error />);
  console.log('data', data);
  const hTabChange = (v) => {
    setCheckedTab(v.target.value);
  };
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
        <select
          value={checkedTab}
          onChange={hTabChange}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {/* <select value={checkedTab} onChange={(e) => { console.log('e', e.target.value); }}> */}
          {genres.map((v) => (<option key={v.value} value={v.value} label={v.title}>{v.title}</option>))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-5">
        {data?.map((v, i) => (
          <SongCard key={v.key} song={v} isActive={isActive} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
