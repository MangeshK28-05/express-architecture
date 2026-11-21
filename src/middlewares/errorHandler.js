export default function errorHandler(err, req, res,next){
    console.error(err.stack)

    const getStatus = err.statusCode || 500

    res.status(getStatus).json({
        success : false,
        msg : err.message || 'something went wrong'
    })
}