import { Schema, Document, model } from 'mongoose';

export interface IBookmark extends Document {
    name: string;
    url: string;
    favourite: boolean;
    folderId: string;
}
const BookmarkSchema: Schema<IBookmark> = new Schema<IBookmark>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        required: true,
    },
    favourite: {
        type: Boolean,
        required: true,
    },
    folderId: {
        type: String,
        required: true,
    }
})

BookmarkSchema.post('save', (error, doc, next) => {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('Bookmark already exist'));
    } else {
        next();
    }
});

export default model<IBookmark>('Bookmarks', BookmarkSchema)