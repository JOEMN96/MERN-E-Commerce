import Cart from "../models/cart";

const addToCart = async (req, res) => {
  const { cartItems } = req.body;
  const { _id } = req.user;

  const _cart = await Cart.findOne({ userId: _id });

  if (_cart) {
    const itemAlreadyAdded = _cart.cartItems.find(
      (c) => c.product == cartItems.product
    );

    if (itemAlreadyAdded) {
      let condition = { userId: _id, "cartItems.product": cartItems.product };
      let action = {
        $set: {
          "cartItems.$": {
            ...cartItems,
            quantity: itemAlreadyAdded.quantity + 1,
          },
        },
      };
      Cart.findOneAndUpdate(condition, action).exec((error, data) => {
        if (error) {
          return res.status(400).send({ error });
        }
        res.status(200).send({ cart: data });
      });
    } else {
      let action = {
        $push: {
          cartItems: req.body.cartItems,
        },
      };
      Cart.findOneAndUpdate({ userId: _id }, action).exec((error, data) => {
        if (error) {
          return res.status(400).send({ error });
        }
        res.status(200).send({ cart: data });
      });
    }
  } else {
    const _cart = new Cart({
      userId: _id,
      cartItems: [cartItems],
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
