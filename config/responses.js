function userExistsResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'user already exists'
    })
}

function userSignedUpResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'user signed up'
    })
}

function userSignedOutResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'user signed out'
    })
}

function userNotFoundResponse(req,res) {
    return res.status(404).json({
        success: false,
        message: 'user not found'
    })
}

function mustSignInResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'sign in please!'
    })
}

function invalidCredentialsResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'email or password incorrect'
    })
}

function verifyResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Please, verify your email account and try again'
    })
}

function notOwnerResponse(req, res) {
    return res.status(401).json({
        success: false,
        message: 'You should be the owner to make this operation'
    });
}

function documentNotFound(req, res) {
    return res.status(404).json({
        success: false,
        message: "Couldn't find the document"
    });
}

 module.exports = {
    userSignedUpResponse,
    userExistsResponse,
    userNotFoundResponse,
    userSignedOutResponse,
    mustSignInResponse,
    invalidCredentialsResponse,
    verifyResponse,
    notOwnerResponse,
    documentNotFound
}