export default async function ListSounds(){
    const data = await fetch("https://api.vercel.app/blog")
    const posts = await data.json()
    return (
        <>
            <h1>List all sounds !</h1>
            <ul>
                {posts.map((post) => (
                    <li className={"m-5"} key={post.id}>{post.title}</li>
                ))}
            </ul>

        </>
    )
}