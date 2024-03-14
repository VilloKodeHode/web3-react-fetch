import ApiVideoClient from "@api.video/nodejs-client";

const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });
const [allVideos, setAllVideos] = useState([]);
// list all videos (all pages)
// let allVideos = [];

for (let currentPage = 1; ; currentPage++) {
    const res = await client.videos.list({ currentPage });
    if (currentPage >= res.pagination.pagesTotal) {
        break;
    }
    setAllVideos([...allVideos, ...res.data]);
}
