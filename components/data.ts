export interface Order {
  id: string;
  name: string;
  orderedAt: string;
  description: string;
  image: string;
}

export const ORDERS: Order[] = [
  {
    id: "412093",
    name: "Apple Watch Ultra 2",
    description:
      "A high-end smartwatch with a built-in GPS and blood oxygen sensor.",
    orderedAt: "2024-08-26",
    image: "watch.png",
  },
  {
    id: "539182",
    name: "Apple TV",
    description: "A high-end smart TV with a built-in Apple TV app.",
    orderedAt: "2024-08-25",
    image: "tv.png",
  },
  {
    id: "281958",
    name: "Apple iPhone 14 Pro",
    description: "A high-end smartphone with a built-in camera.",
    orderedAt: "2024-08-24",
    image: "iphone.png",
  },
];

export interface TrackingInformation {
  orderId: string;
  progress: "Shipped" | "Out for Delivery" | "Delivered";
  description: string;
}

export const TRACKING_INFORMATION = [
  {
    orderId: "412093",
    progress: "Shipped",
    description: "Last Updated Today 4:31 PM",
  },
  {
    orderId: "281958",
    progress: "Out for Delivery",
    description: "ETA Today 5:45 PM",
  },
  {
    orderId: "539182",
    progress: "Delivered",
    description: "Front Porch Today 3:16 PM",
  },
];

export const getOrders = () => {
  return ORDERS;
};

export const getTrackingInformation = ({ orderId }: { orderId: string }) => {
  return TRACKING_INFORMATION.find((info) => info.orderId === orderId);
};
