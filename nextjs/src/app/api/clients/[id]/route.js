export async function GET(req, { params }) {
    const { id } = params

    return new Response(JSON.stringify({
        id: id,
        nome: "Jhony",
        idade: 23,
        genero: "M"
    }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
}