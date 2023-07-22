import Restaurant from "../models/Restaurants.js";


export const handleListRestaurants = async (req, res) => {
    try{
        const listAllRestaurants = await Restaurant.find()
        
           
        console.log("restaurent list:", listAllRestaurants)
        res.send({success: true, listAllRestaurants })

    } catch (error) {
        console.log("Error listing restaurents:", error)
        res.send({success: false, error})
    }
}


export const handleAddNewRestaurant = async (req, res) => {
    console.log("new post body:", req.body)
    try{
        let {
            restaurantname,
            description,
            openningtime,
            longitude,
            latitude,
            postcode,
            city,
            cuisine,
        } = req.body

        const newRestaurant = await Restaurant.create({
            restaurantname,
            description,
            openningtime,
            longitude,
            latitude,
            postcode,
            city,
            cuisine,
        })
        console.log("add new rest:", newRestaurant)
        res.send({success: true, newRestaurant })
    } catch (error) {
        console.log("error add rest:", error)
        res.send({success: false, error})
}
  
}
export const handleListOneResturant = async (req, res) => {
    try{
        const id = req.params.id

        if (!id) return res.send({ success: false, error: "Resturant id is not provided" });

        const selectedResturent = await Restaurant.findById(id)
        .select("-__v")
        console.log("Selected resturant:" , selectedResturent)
        res.send({success: true, selectedResturent})
    } catch (error) {
        console.log('Error Selected property:', error.message)
        res.send({success: false, error})
    }
}


export const listSearchPosts = async (req, res) => {
    try {
      console.log(" hello search ");
  
      const text = req.query.text;
      console.log("text:", text);
  
      if (!text)
        return res.send({ success: false, error: "No search text provided" });
  
      const regExp = new RegExp(text, "i");
  
      const searchPosts = await Restaurant.find({
        $or: [
            { restaurantname: regExp },
            { description: regExp },
            { city: regExp },
            { cuisine: regExp },
          ]
      })
      console.log(" search ", searchPosts);
      res.send({ success: true, searchPosts });
    } catch (error) {
      console.log(" search ~ error", error.message);
  
      res.send({ success: false, error: error.message });
    }
  };