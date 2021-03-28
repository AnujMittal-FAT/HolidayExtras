import axios from "axios";

const flickApiURL =
  "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";

// const flickApiURL =
//   "https://api.flickr.com/services/feeds/photos_public.gne?safe_search=1&format=json&nojsoncallback=1";

FlickerService.getFeed = async () => {
  const getAll = await axios.get(`${flickApiURL}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorisation",
    },
  });
  return getAll;
};

FlickerService.CancelSource = axios.CancelToken.source();
function FlickerService() {}

export default FlickerService;
