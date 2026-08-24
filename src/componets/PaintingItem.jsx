export default function PaintingItem({
  url,
  title,
  author,
  profileUrl,
  price,
  quantity,
}) {
  return (
    <>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена:{price} кредитов</p>
      {/* <p>Доступность:{quantity} заканчивается или есть в наличии</p> */}
      <p>
        Доступность:{quantity} :{" "}
        {quantity < 10 ? "закінчується" : "є в наявності"}
      </p>
      <button type="button">Додати до кошику</button>
    </>
  );
}
