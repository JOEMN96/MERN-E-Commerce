import Cart from "../models/cart";

const addToCart = async (req, res) => {
  const { cartItems } = req.body;
  const { _id } = req.user;

  const isCartAvailable = await Cart.findOne({ userId: _id }).exec();

  if (isCartAvailable) {
    const updated = await Cart.findOneAndUpdate(
      { userId: _id },
      { cartItems: { cartItems } }
    );
    return res.status(200).send({ updated });
  } else {
    const _cart = new Cart({
      userId: _id,
      cartItems,
    });

    try {
      const __cart = await _cart.save();
      res.status(201).send({ cart: __cart });
    } catch (error) {
      res.status(400).send(error);
    }
  }
};

export { addToCart };
