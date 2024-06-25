const logReq = (req, res, next) => {
    console.log(`PATH :`, req.path)
    next()
}

export default logReq