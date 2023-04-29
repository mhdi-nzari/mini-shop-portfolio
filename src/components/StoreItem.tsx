``
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrnency";
import { useShoppingCart } from "../context/ShoppingCartContext";


type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {getItemQuantity , increaseCartQuantity , decreaseCartQuantity , removeFromCart} = useShoppingCart()
  const quantity = getItemQuantity(id);

  return (
    <Card className="rounded-2 h-100">
      <Card.Img variant="top" src={imgUrl} height={"200px"} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-center mb-4">
          <div className="flex flex-column">
            <p className="m-0 text-muted fs-5 fw-normal">#{id}</p>
            <p className="fs-3 fw-semibold mb-0">{name}</p>
          </div>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={()=> increaseCartQuantity(id)} > + Add To Card</Button>
          ) : (
            <div
              className="d-flex align-items-center justify-content-center flex-column "
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center "
                style={{ gap: ".5rem" }}
              >
                <Button className="mx-1" onClick={()=> decreaseCartQuantity(id)}>-</Button>
                <div className="fs-3">
                  <span>{quantity} in Cart</span>
                </div>
                <Button className="mx-1" onClick={()=> increaseCartQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" size="sm" onClick={()=> removeFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
