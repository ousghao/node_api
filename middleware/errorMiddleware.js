const errorMiddleware = (err,req,res,next)=>{
    console.log('here a middleware')
    const statuscode = res.statuscode ? res.statuscode : 500
    res.status(statuscode)
    res.json({message:err.message , stack : process.env.NODE_ENV === "developement"? err.stack :null})
}

module.exports = errorMiddleware