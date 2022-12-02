import {ApolloClient, InMemoryCache} from "@apollo/client";

export  const Client = new ApolloClient({
	uri:'https://api-us-west-2.hygraph.com/v2/cl7aqqsoz38nx01uhhqo5cbnn/master',
	cache: new InMemoryCache(),
	headers: {
		authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Njk5NzA3MzksImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w3YXFxc296MzhueDAxdWhocW81Y2Jubi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzA4OTRiMGUtNGQ3ZS00YzMxLWE5OGMtZmMzN2JjYTllZmY4IiwianRpIjoiY2xiNjlnbGZwMG1jNDAxdDU5YmJvZTJydyJ9.U7OiBpqpSGLmKBL504vFEJ8u9imUuQNBGyjjYKAYCTCQo2quJNWn6MCKSKhoWqwkgkb0mFAR3RRygII5v7nDz02j1PPkOnruHwxKas5AJ8NklEIZY6wqzbAaqOvV3I9xCt2YbkT58bkonKwVH59OpFi4eJ1kNKJw8mXDExifIy3ML5oblb9bg5KbIUtikFW-i0lMYnjuHIW0VNTZolOKRKiQxTgmbwac1JDzeBa-Sco-XFcFmx38smke3KnWPKBwXpRRp7O_CVGh2cFUHMIdL7UOgzgCudCbRvCx96iY6KNMc7gvd6ehQjyMV2Jh6bN4-dxQGmUd9LVHo-H-S3UuAMrRSHRkScWUX3NvVHPvTTHixLL5I45hyR6NiWAtUA8wFRbn0OeGTQXaDqDCCRph5JqitJPjfXxiUGeDF8AORuKiYN958yX-GqY46DK3W9ARsqAjIj230QhHCU5Nk93TIp4kh-y1d8w3u-KLOXNE5DdfSXo59Mki2byOT8vpdUNlXxVNCNi1rdsURXJ1xqOtd7gTv_2_S1_U7NBgya8rB2palUxAbLz6pSNXJ5810bIRC3NSqxxGBjCNvsYSj3sG9qZt1u-jO5JSDZPYQlh7G0S6k9Msje_6RgwS1GbmGCBoCOHcV2h9FIrsSencChwdKIv9p87tjCJp4UqP-0wUpR4`
	}
})