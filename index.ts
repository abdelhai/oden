import { serve } from "https://deno.land/std@0.159.0/http/server.ts";

const handler = (request: Request): Response => {
  return new Response(`Greetings from Space! ✨`, { status: 200 });
};

await serve(handler, { port: 8080 });