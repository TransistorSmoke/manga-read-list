

const Manga = ({id, title, author, yearReleased, onDragStart}) => {
  return (
    <div draggable onDragStart={event => onDragStart(event, id)}>
      <h2>{title}</h2>
      <p>{author}, {yearReleased}</p>
      <hr />

    </div>
  )
}

export default Manga;