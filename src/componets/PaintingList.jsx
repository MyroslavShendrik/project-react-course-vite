import PaintingItem from "./PaintingItem.jsx";

export default function PaintingList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <PaintingItem
            url={item.url}
            title={item.title}
            author={item.author.tag}
            profileUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}
