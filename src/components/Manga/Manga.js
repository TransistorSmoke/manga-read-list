

const Manga = ({id, title, author, yearReleased, onDragStart}) => {
  return (
    <div className='hover:bg-slate-200 shadow-md rounded-md bg-slate-50 my-3 mx-2 p-2 text-center' draggable onDragStart={event => onDragStart(event, id)}>
      <h2 className='font-semibold'>{title}</h2>
      <p className='text-xs text-slate-500'>{author}, {yearReleased}</p>
    </div>
  )
}

export default Manga;