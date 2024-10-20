export const dynamic = 'force-dynamic'

export async function GET(req) {
    return new Response(JSON.stringify({
        name: "Hello",
        method: req.method
    }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}