import { useEffect, useState } from 'react';
import useFetchData from '../hooks/useFetchData';
import ReadingStatusColumn from '../components/ReadingStatusColumn/ReadingStatusColumn';


const readingStatusColumnList = [
  { id: 1, title: "Not Started"},
  { id: 2, title: "Ongoing"},
  { id: 3, title: "Done"},
]

const onDragStart = (e, id) => {
  e.dataTransfer.setData('id', id)
}

const onDragOver = (e) => {
  e.preventDefault();
}

const MangaReadingBoard = () => {
  const [loading, error, data] = useFetchData('http://localhost:3030/manga')
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    setMangaList(data)
  }, [data])



  const onDrop = (event, statusColumnId) => {
    const draggedElementId = event.dataTransfer.getData('id');
    const updatedReadingList = mangaList.filter(manga => {
      if (manga.id.toString() === draggedElementId) {
        manga.readingStatusId = statusColumnId;
      }

      return manga
    });
    setMangaList(updatedReadingList);
  }

  return (
    <div className="flex justify-center mt-16">

      {
        readingStatusColumnList.map(column => (
            <ReadingStatusColumn
              key={column.id}
              columnId={column.id}
              title={column.title}
              loading={loading}
              error={error}
              mangaList={mangaList.filter(manga => manga.readingStatusId === column.id)}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
            />
          )
        )

      }



    </div>
  )
}

export default MangaReadingBoard;