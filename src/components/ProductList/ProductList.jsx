export default function ProductList({ image, title, quantity, count, price }) {
  return (
    <>
      <div>
        <div>{image}</div>
        <div>
          {title}
          {quantity}
        </div>
      </div>

      <div>
        <div> - {count} +</div>
        <div>{price}</div>
        <button>cross</button>
      </div>
    </>
  );
}
