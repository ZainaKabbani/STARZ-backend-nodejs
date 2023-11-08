const mongoose = require("mongoose");

const nearbyCities = require("nearby-cities");
const orderSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: [true, "An order must belong to a product."],
    },
    productOwner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    orderOwner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "A order must have a User Id."],
    },
    quantitySell: {
      type: Number,
      require: [true, "You must have define qunatity"],
    },
    destinationAddress: {
      type: [Number],
      require: [true, "Must put address"],
    },
    distance: {
      type: Number,
    },
    toBeDelivered: {
      type: Boolean,
      default: false,
    },
    deliveryPrice: {
      type: Number,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual propreties
orderSchema.virtual("destinationAddressInWords").get(function () {
  const query = { latitude: this.destinationAddress[0], longitude: this.destinationAddress[1] };
  const cities = nearbyCities(query);
  // latitude/longitude
 
  if (cities) {
    

    const country = cities[0].country;
    const city = cities[0].name;
    return { country, city };
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
