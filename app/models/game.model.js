module.exports = mongoose =>  mongoose.model('team',
        mongoose.Schema(
            {
                teamId: String,
                teamRegion: String,
                teamName: String,
                orgYyyy: String,
                stadiumName: String,
                address: String,
                tel: String
            }, { timestamps: true }
        )
    )