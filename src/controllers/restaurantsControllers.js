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


export const handleAddNewRestaurant = (req, res) => {
    try{
        console.log("add rest")
        res.send("hi add")
    } catch (error) {
        console.log("error add rest")
        res.send("error add")
}
}