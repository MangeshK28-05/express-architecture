export default function asyncCatcher(fn){ //this will catch the controller function
    return function(req,res,next){ // this thing is the actual middleware i will execute
        Promise.resolve()
        .then(
            function(){
                return fn(req,res,next)
            }
        )
        .catch(next)
    }
}
