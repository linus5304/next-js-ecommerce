"use server";

import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import db from "../../../db/db";

export async function deleteOrder(id: string) {
    const order = await db.order.delete({ where: { id } });

    if (order === null) return notFound();

    // revalidatePath('/');
    // revalidatePath('/products');
    return order;
}