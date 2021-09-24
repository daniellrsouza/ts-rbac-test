import { Schema } from 'mongoose';

const base = (schema: Schema) => {
    // Schema - Options
    schema.set('timestamps', true)

    // Schema
    schema.add({
        deletedAt: {
            type: Date,
            default: null
        }
    })

    // Hooks
    schema.pre('find', function (next) {
        //this.where('deletedAt', null)
        next()
    })
    //
    schema.pre('findOne', function (next) {
        this.where('deletedAt', null)
        next()
    })
    //
    schema.pre('count', function (next) {
        this.where('deletedAt', null)
        next()
    })
    //
    schema.pre('countDocuments', function (next) {
        this.where('deletedAt', null)
        next()
    })

    // Schema functions
    schema.methods.removeLogical = function () {
        this.deletedAt = Date.now()
        return this.save()
    }
}

export default base;