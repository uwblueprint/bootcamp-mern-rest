import mongoose from "mongoose";

const RestaurantGroup = mongoose.model("Restaurant Group", new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: String,
        description: String,
        restaurantIds: [{type: mongoose.Types.ObjectId, ref: 'Restaurant'}]
    }
));

export default RestaurantGroup;