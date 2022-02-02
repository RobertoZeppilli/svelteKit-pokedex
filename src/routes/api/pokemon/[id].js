export async function get({ params }) {
    const id = params.id;
    const base_url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const res = await fetch(base_url);
    const pokeman = await res.json();
    return {
        status: 200,
        body: pokeman
    }
}