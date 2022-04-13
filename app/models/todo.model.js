module.exports = mongoose =>  mongoose.model('todo',
        mongoose.Schema(
            {
                todo: String
            }, { timestamps: true }
        )
    )