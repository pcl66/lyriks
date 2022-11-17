const Discover = () => {
  console.log('xxx');
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
        <select>
          {[1, 2, 3, 4].map((v) => (<option>123</option>))}
        </select>
      </div>
    </div>
  );
};

export default Discover;
