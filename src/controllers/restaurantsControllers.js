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


