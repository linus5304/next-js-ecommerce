import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";
import { OrderInformation } from "./components/order-information";
import React from "react";

type OrderHistoryEmailProps = {
  orders: {
    id: string;
    createdAt: Date;
    pricePaidInCents: number;
    downloadVerificationId: string;
    product: {
      name: string;
      description: string;
      imagePath: string;
    };
  }[];
};

OrderHistoryEmail.PreviewProps = {
  orders: [
    {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      downloadVerificationId: crypto.randomUUID(),
      pricePaidInCents: 80000,
      product: {
        name: "Product name",
        description: "Some description",
        imagePath:
          "/products/1f922242-ce1f-4d83-bc2c-9112783014fb-blood_bank_logo.png",
      },
    },
    {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      downloadVerificationId: crypto.randomUUID(),
      pricePaidInCents: 80000,
      product: {
        name: "Product name",
        description: "Some description",
        imagePath:
          "/products/1f922242-ce1f-4d83-bc2c-9112783014fb-blood_bank_logo.png",
      },
    },
  ],
} satisfies OrderHistoryEmailProps;

export default function OrderHistoryEmail({ orders }: OrderHistoryEmailProps) {
  return (
    <Html>
      <Preview>Order History and downloads</Preview>
      <Tailwind>
        <Head />
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Heading>Order History</Heading>
            {orders.map((order, index) => (
              <React.Fragment key={order.id}>
                <OrderInformation
                  order={order}
                  product={order.product}
                  downloadVerificationId={order.downloadVerificationId}
                />
                {index < orders.length - 1 && <Hr />}
              </React.Fragment>
            ))}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
