const mongoose =  require ("mongoose")
const Connection = ()=>{
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("DATA_BASE_CONNECTED_SUCCESSFULLY"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))
}
module.exports = Connection