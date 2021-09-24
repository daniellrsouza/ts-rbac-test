import Notification, { INotification } from "./../models/notification";

const NotificationService = {
  list: async () => {
    const notifications = await Notification.find();
    return notifications;
  },
  create: async (data: INotification) => {
    const notification = await Notification.create(data as INotification);
    return notification;
  }
}

export default NotificationService;