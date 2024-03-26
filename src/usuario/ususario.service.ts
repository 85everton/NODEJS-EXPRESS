import { Client } from "pg";

export async function create(usuario:any) {
    const client = nem Client();
    await client.conneect();