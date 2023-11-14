import Manga from '../Manga/Manga';

const ReadingStatusColumn = ({columnId, title, loading, error, mangaList, onDragStart, onDragOver, onDrop}) => {
  return (
    <div className="w-80 mx-1 border border-slate-100 bg-stone-200 rounded-lg" onDragOver={onDragOver} onDrop={event => onDrop(event, columnId)}>

      <div className='bg-slate-700 p-1'>

        <h1 className= 'tracking-wider text-slate-200 uppercase text-l font-bold text-center py-2'>{title}</h1>
      </div>
        {
          loading || error ? (
            <span>{error || "Loading..."}</span>
          ) : (
            mangaList.map((manga => (
          <Manga
              key={manga.id}
              id={manga.id}
              title={manga.title}
              author={manga.author}
              yearReleased={manga.yearReleased}
              onDragStart={onDragStart}
            />
            ))
          ))
        }
    </div>
  )
}

export default ReadingStatusColumn;