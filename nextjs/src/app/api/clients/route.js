export async function GET(req) {
    const url = new URL(req.url)
    const params = new URLSearchParams(url.search)

    return new Response(JSON.stringify({
        nome: params.get('nome'),
        idade: 23,
        genero: "M"
    }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
}