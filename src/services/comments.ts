import {axiosInstance as axios} from "@/lib/instance/axios";

export async function getCommentsByProductId(productId: string) {
    const response = await axios.get(`/api/records/comments?filterKey=productId&filterValue=${productId}`);
    return response.data.records;
}

export async function addComment(productId: string, comment: string, username: string) {
    const response = await axios.post("/api/records/comments", {productId, comment, username});
    return response.data;
}