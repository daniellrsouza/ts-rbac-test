import { Document, model, Schema } from "mongoose";
import base from "./base";

enum Priority {
  high = 'high',
  medium = 'medium',
  low = 'low'
}

export interface INotification extends Document {
  title: string,
  subtitle?: string,
  message: string,
  from: string,
  to?: string,
  sendAt?: Date,
  priority: Priority
}

const schema = new Schema<INotification>({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: null,
  },
  message: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    default: 'loadshark'
  },
  to: {
    type: String,
    default: null
  },
  sendAt: {
    type: Date,
    default: new Date()
  },
  priority: {
    type: String,
    enum: Object.values(Priority)
  }
}, {
  timestamps: true
});

schema.set('toObject', {
  getters: true
});

schema.set('toJSON', {
  getters: true
});

schema.index({
  deletedAt: 1,
  createdAt: 1,
});

// Plugins
schema.plugin(base, {});

export default model<INotification>('Notification', schema);