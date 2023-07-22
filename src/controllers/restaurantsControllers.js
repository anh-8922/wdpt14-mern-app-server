import Restaurant from "../models/Restaurants.js";


export const handleListRestaurants = (req, res) => {
    try{
     
           
        console.log("New property post added:", newPropertyPost)
        res.send({success: true, newPropertyPost })

    } catch (error) {
        console.log("Error in adding new property:", error)
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
        } = req.body

        const newRestaurant = await Restaurant.create({
            restaurantname,
            description,
            openningtime,
            longitude,
            latitude,
        })
        console.log("add new rest:", newRestaurant)
        res.send({success: true, newPropertyPost })
    } catch (error) {
        console.log("error add rest:", error)
        res.send({success: false, error})
}
}

