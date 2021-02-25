export function createPostDate () { 
  const postDate = new Date();
  const formattedPostDate = postDate.toDateString();
  return formattedPostDate;
}