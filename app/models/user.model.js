module.exports = mongoose =>  mongoose.model('user',
        mongoose.Schema(
            {
                userid:String, 
                password:String, 
                name:String, 
                email:String, 
                phone:String, 
                birth:String, 
                address:String
            }, { timestamps: true }
        )
    )

