import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken = (req, res, next) => {
     
    const token = req.cookies.access_token;
    if (!token) {
        req.user = {}
        return next(createError(401, "You are not authenticated"))
        
    }
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err)
            return next(createError(403, "Token is not valid!"));
        req.user = user
        next()
    })
}


export const verifyUser = (req, res, next) => {
    verifyToken(req, res,() => {
        if (req.user.id === req.params.id || req.user.isAdmin)
        {
            next()
        }
        else {
            return next(createError(403, "You are not authorised"));
 
        }
    })
}
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin)
        {
            next() 
        }
        else {
            return next(createError(403, "You are not authorised"));
 
        }
    })
}
/*export const verifyToken = (req) => {
    const token = req.cookies.access_token;
    if (!token) {
        return { status: 401 };
    }
    try {
        const user = jwt.verify(token, process.env.JWT);
        console.log( user)
        return { status: 200, user };
    } catch (e) {
        return { status: 403}
    }
};

 
export const verifyUser = (req, res, next) => {
    const tokenStatus = verifyToken(req);
    if(tokenStatus.status==401) return next(createError(401,"You dnt have token!"))
    if (tokenStatus.status !== 200) return next(createError(403, "You are not authorised"));
    if (tokenStatus.user.id === req.params.id || tokenStatus.user.isAdmin) return next();
    return next(createError(403, 'invalid  token!'));
    
};

export const verifyAdmin = (req, res, next) => {
    const tokenStatus = verifyToken(req);
    if (tokenStatus.status == 401) return next(createError(401, "You dnt have token!"))
    if (tokenStatus.status !== 200) return next(createError(403, "You are not authorised"));
     if (tokenStatus.user.isAdmin) return next();
        return next(createError(403, 'You are not admin'));
};*/