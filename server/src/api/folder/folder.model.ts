import { Schema, Document, model } from 'mongoose';

export interface IFolder extends Document {
    name: string;
}
const FolderSchema: Schema<IFolder> = new Schema<IFolder>({
    name: {
        type: String,
        required: true,
        unique: true,
    }
})

FolderSchema.post('save', (error, doc, next) => {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('Folder already exist'));
    } else {
        next();
    }
});

export default model<IFolder>('Folders', FolderSchema)