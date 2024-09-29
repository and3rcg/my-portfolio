
// export async function GET(req: Request) leaving this here once I implement querystrings in the backend
export async function GET() {
    try {
        const response = await fetch("https://my-portfolio-backend-mu.vercel.app/projects");
        const responseJSON = await response.json();
        return new Response(JSON.stringify(responseJSON), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ "error": err }), { status: 400 })
    }
}