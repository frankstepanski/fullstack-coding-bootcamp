import { v4 as uuidv4 } from 'uuid';

export const STORE = [

  {
		id: uuidv4(),
		title: 'Star Wars: A New Hope',
		year: 1977,
		synopsis:
			"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
		imgSrc: "https://res.cloudinary.com/dgkpobybj/image/upload/v1667707293/star-wars_ue9ldh.jpg",
		categories: ["Adventure", "Action", "Science Fiction"],
		reviews: [
			{
				user: "pete",
				review: "Pretty good movie, loved the ending.",
				rating: 5
			},
			{
				user: "pam",
				review: "My favorite movie, ever.",
				rating: 5
			},
			{
				user: "martin",
				review: "Not really a sci-fi fan.",
				rating: 2
			},
			{
				user: "josh",
				review: "I've seen better.",
				rating: 3
			}
		]
	},
	{
		id: uuidv4(),
		title: 'Star Wars: The Empire Strikes Back',
		year: 1980,
		synopsis:
			'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
		imgSrc: "https://res.cloudinary.com/dgkpobybj/image/upload/v1667707611/empire-strikes-back_noskvg.jpg",
		categories: ["Adventure", "Action", "Science Fiction"],
		reviews: [
			{
				user: "sam",
				review: "Loved it, but a little too sad for me.",
				rating: 4
			},
			{
				user: "tim",
				review: "Overall, I liked it.",
				rating: 3
			}
		]

	},
	{
		id: uuidv4(),
		title: 'Star Wars: Return of the Jedi',
		year: 1983,
		synopsis:
			'Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.',
		ratings: [],
		imgSrc: "https://res.cloudinary.com/dgkpobybj/image/upload/v1667707766/return-of-jedi_ndbhyo.jpg",
		categories: ["Adventure", "Action", "Science Fiction"],
		reviews: [
			{
				user: "rachel",
				review: "I loved the ewoks!!!",
				rating: 4
			},
			{
				user: "todd",
				review: "Pretty good.",
				rating: 4
			}
		]
	},
];