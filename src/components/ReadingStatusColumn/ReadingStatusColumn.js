import Manga from '../Manga/Manga';
import './ReadingStatusColumn.css';

const ReadingStatusColumn = ({columnId, title, loading, error, mangaList, onDragStart, onDragOver, onDrop}) => {
  return (
    <div className="status-col-wrapper" onDragOver={onDragOver} onDrop={event => onDrop(event, columnId)}>


        <h1>{title}</h1>
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