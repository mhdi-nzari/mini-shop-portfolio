import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItem from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrnency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItem.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />

      <div className="me-auto">
        <div>
          {item?.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              X{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>

      <div>    {formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id)} >&times;</Button>
    </Stack>
  );
}
