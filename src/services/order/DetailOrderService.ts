import prismaClient from "../../prisma/prisma";

interface OrderRequest {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: OrderRequest) {
    const orderItems = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        order: true,
        product: true,
      },
    });

    return orderItems;
  }
}

export { DetailOrderService };
