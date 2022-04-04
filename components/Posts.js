import Post from "./Post";

const realtimePosts = [
	{
		name: "Sonny Sangha",
		image: "https://links.papareact.com/zof",
		// postImage: "https://links.papareact.com/l4v",
		message: "Letsssss Go Guyysss!",
		timestamp: "12-12-21, 10:03pm",
	},
	{
		name: "Elon Musk",
		image: "https://links.papareact.com/kxk",
		postImage: "https://links.papareact.com/4zn",
		message: "Tesla is where it's at.",
		timestamp: " 11-11-21, 7:53pm",
	},
	{
		name: "Jeff Bezoz",
		image: "https://links.papareact.com/k2j",
		postImage: "https://links.papareact.com/f0p",
		message:
			"I actually went to space, unlike someone else that shall remain nameless.",
		timestamp: "10-10-21, 6:03pm",
	},
	{
		name: "Mark Zuckerberg",
		image: "https://links.papareact.com/xql",
		// postImage: "https://links.papareact.com/snf",
		message: "I also am not a Scooby Doo villain.",
		timestamp: "09-09-21, 5:03pm",
	},
	{
		name: "Bill Gates",
		image: "https://links.papareact.com/4u4",
		postImage: "https://links.papareact.com/zvy",
		message: "I am not a Scooby Doo villain!",
		timestamp: "08-08-21, 04:03pm",
	},
];

function Posts() {
	return (
		<div>
			{realtimePosts.map((post) => (
				<Post
					key={post.id}
					name={post.name}
					message={post.message}
					timestamp={post.timestamp}
					image={post.image}
					postImage={post.postImage}
				/>
			))}
		</div>
	);
}

export default Posts;
