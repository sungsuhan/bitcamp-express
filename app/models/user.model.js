module.exports = mongoose =>  mongoose.model('user',
        mongoose.Schema(
            {
                userId: String,
                pw: String,
                name: String,
                tel: String
            }, { timestamps: true }
        )
    )

