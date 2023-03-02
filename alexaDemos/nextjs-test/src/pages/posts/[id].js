import { useRouter } from "next/router"


export default function SinglePost() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>Post: {id}</div>
    )
}