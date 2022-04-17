module.exports = mongoose =>  mongoose.model('board',
        mongoose.Schema(
            {
                title: String,
                name: String,
                teamid: String,
                subject: String
            }, { timestamps: true }
        )
    )