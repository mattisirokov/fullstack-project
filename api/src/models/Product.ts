import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  image: string
  description: string[]
  category: string
  variant: string
  sizes: number[]
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
  },
  sizes: [Number],
})

export default mongoose.model<ProductDocument>('Product', productSchema)
